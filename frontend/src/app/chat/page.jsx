'use client';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { OpenAIStream, StreamReader } from '../../lib/openai-stream'; // Update the path to match the location of your file

const Page = ({}) => {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')
    const [message, setMessage] = useState('')
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const decoder = new TextDecoder("utf-8");
    //             await StreamReader(stream, decoder, (newText) => setMessage((prev) => prev + newText))
    //         } catch (error) {
    //           console.error('Error fetching data:', error);
    //         }
    //       };
    //     fetchData()
    // }, [])
    useEffect(() => {
        const payload = {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Assist the user with his medical query by providing him accururate, presice and short answers and asnwer in bullet points on actions he can take. Do not mention that you are not a doctor. No more than 50 words. Responde with "I cannot help you with non medical queries" if user prompts non-medical statements.'},
            { role: 'user', content: query },
            // Add more messages as needed
          ],
          temperature: 0.7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          max_tokens: 100,
          stream: true,
          n: 1
        };
    
        // Call OpenAIStream
        console.log('env_key', process.env.OPENAI_API_KEY)
        fetch('https://api.openai.com/v1/chat/completions', {
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer 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'
            },
            method: 'POST',
            body: JSON.stringify(payload),
        }).then(data => {
            const openAIStreamResponse = data.body
            StreamReader(openAIStreamResponse, new TextDecoder(), (newText) => {
                if (newText === '[DONE]') {
                    return
                }
                setMessage((prev) => prev + newText)
            // Handle the received text as needed, such as updating state or displaying in UI
            });
        })
    
        // Cleanup function if needed
        return () => {
          // Cleanup code here (e.g., abort controller cleanup)
        };
      }, []); // Empty dependency array to run only once
  return (
    <div className='min-h-[400px] mx-12 my-12 shadow-md bg-slate-200'>
        {message.split('- ').map((e) => (
            <p>-{e}</p>
        ))}
    </div>
)};

export default Page;