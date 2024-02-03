export interface ChatGPTMessage {
    role: 'user' | 'system';
    content: string;
}

export interface OpenAIStreamPayload {
    model: string;
    messages: ChatGPTMessage[];
    temperature: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
    max_tokens: number;
    stream: boolean;
    n: number;
}

export function OpenAIStream(payload: OpenAIStreamPayload) {
    let controller = new AbortController();
    const signal = controller.signal;
    console.log(process.env.OPENAI_API_KEY)

    try {
        fetch('https://api.openai.com/v1/chat/completions', {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`
            },
            method: 'POST',
            body: JSON.stringify(payload),
        }).then(data => {
            console.log(data)
            return data.body
        })

    } catch (e) {
        console.error(e);
        controller.abort();
    }
}

export async function StreamReader(stream: any, decoder: TextDecoder, callBackFn: (newText: string) => void) {
    const reader = stream.getReader();
    console.log('reader', reader)
    let done = false;

    while (!done) {
        const chunk = await reader.read();
        done = chunk.done ?? true;
        const value = chunk.value ?? new Uint8Array();
        console.log('hi')

        if (done) {
            break;
        }

        const decodedChunk = decoder.decode(value);
        const lines = decodedChunk.split('\n');
        console.log(lines)
        const parsedLines = lines
            .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
            .filter((line) => line !== "") // Remove empty lines and "[DONE]"
            .map((line) => {
                if (line.includes('[DONE]')) {callBackFn("[DONE]")} else {
                return JSON.parse(line)}}); // Parse the JSON string
        parsedLines.forEach((line) => {
            if (line?.choices?.[0]?.delta?.content) {
                // callBackFn(id, line.choices[0].delta.content)
                callBackFn(line.choices[0].delta.content)
            }
        })

    }
}