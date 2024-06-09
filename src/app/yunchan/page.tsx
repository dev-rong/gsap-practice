// Error: Vercel Blob: No token found. 
//Either configure the `BLOB_READ_WRITE_TOKEN` environment variable, 
//or pass a `token` option to your calls.
import React from 'react'
import {list} from "@vercel/blob"
import '../yc.css'

const Yunchan = () => {
  return (
    <svg width="583" height="1272" viewBox="0 0 583 1272" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="path" d="M0.5 1L168.5 183M168.5 183L383.5 1M168.5 183V329M168.5 475V329M168.5 329L196 475H270.5L306 329V475L339.5 329H444L452.5 461.5" stroke="black"/>
    <path className="path" d="M163 475V672M163 869V672M163 672H292.5M292.5 672V869M292.5 672H455.5V756M455.5 756V869H345V756H455.5ZM455.5 756H582V869" stroke="black"/>
    <path className="path" d="M163 673.5H17V858H127" stroke="black"/>
    <path className="path" d="M165.5 858V1271.5H334V1161.5H402.5M402.5 1161.5V1271.5M402.5 1161.5H474.5M474.5 1161.5V1271.5M474.5 1161.5H551.5V1271.5" stroke="black"/>
    <path className="path" d="M342 1120V1076" stroke="black"/>
</svg>
    // <main className='flex min-h-screen flex-col items-center justify-center p-24'>
    //     <div>
    //         <VideoComponent  />
    //     </div>
    // </main>
  )
}

async function VideoComponent( ) {
    const {blobs} = await list({
         
        limit: 1
    })
    
    const {url} = blobs[0]
    return (
        <>
            <div className='overflow-hidden h-[600px] flex items-center justify-center'>
                <video autoPlay muted playsInline controls preload="none"
                aria-label="video player"
                >
                    <source src={url} type="video/mp4" />
                    브라우저가 비디오 태그를 지원하지 않습니다.
                </video>
            </div>

           
        </>
    )
}

export default Yunchan