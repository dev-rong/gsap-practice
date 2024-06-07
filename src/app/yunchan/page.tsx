// Error: Vercel Blob: No token found. 
//Either configure the `BLOB_READ_WRITE_TOKEN` environment variable, 
//or pass a `token` option to your calls.
import React from 'react'
import {list} from "@vercel/blob"

const Yunchan = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
        <div>
            <VideoComponent fileName="yunchan.mp4" />
        </div>
    </main>
  )
}

async function VideoComponent({fileName}: {fileName: string}) {
    const {blobs} = await list({
        prefix: fileName,
        limit: 1
    })
    
    const {url} = blobs[0]
    return (
        <div className='overflow-hidden h-[600px] flex items-center justify-center'>
            <video autoPlay muted playsInline controls loop preload="none" 
            aria-label="video player" 
            src="">
                <source src={url} type="video/mp4" />
                브라우저가 비디오 태그를 지원하지 않습니다.
            </video>
        </div>
    )
}

export default Yunchan