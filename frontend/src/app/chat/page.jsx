'use client';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Arrow } from '../../components/Svg'
import { OpenAIStream, StreamReader } from '../../lib/openai-stream'; // Update the path to match the location of your file

const Page = ({}) => {
    const searchParams = useSearchParams()
    const [prompt, setPrompt] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')
        setPrompt('')
        generateResponse(prompt)
        setLoading(false)
    }

    const generateResponse = (query) => {
        console.log('query', query)
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
    } 

  return (
    <div className='flex flex-col gap-4 mx-12 my-12'>
        <div className='min-h-[400px] shadow-md bg-slate-200'>
            {message.split('- ').map((e) => (
                <p>-{e}</p>
            ))}
        </div>
        <form className='w-full relative' onSubmit={handleSubmit}>
            <input 
                type='text' 
                value={prompt}
                placeholder='Enter your query...' 
                onChange={(e) => (setPrompt(e.target.value))}
                disabled={loading}
                className={`h-[66px] w-full outline-none border-2 border-black placeholder:text-[22px] pl-5 pr-14 py-3 text-[19px] font-semibold rounded-md ${loading && 'opacity-5 cursor-not-allowed'}`} />
            <Arrow className='h-8 w-auto absolute top-1/2 right-5 -translate-y-1/2' onClick={handleSubmit}/>
        </form>
    </div>
)};

export default Page;