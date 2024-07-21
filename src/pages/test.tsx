import React from 'react'
import dynamic from 'next/dynamic';
//import { StudioPlayer } from 'theta-video-api-drm-player'


 // Dynamically import the StudioPlayer component
//const StudioPlayer = dynamic(() => import('theta-video-api-drm-player').then(mod => mod.StudioPlayer), { ssr: false });
//import 'theta-video-api-drm-player/dist/index.css'
import VideoPlayer3 from '@/components/vidPlayer2/vidPlayer3';

export default function testngPlayer() {

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
  aspectRatio: '16:9',
    playbackRates: [0.5, 1, 1.5, 2],
    experimentalSvgIcons: true,
    techOrder: ["theta_hlsjs", "html5"],
    sources: [{
      src: "https://media.thetavideoapi.com/org_rk3kzz9rviaxfkugcrgvtaaanf0q/srvacc_u6hmr6v1ycvs4vsp6abikcduz/video_q5t5z8z9semqrzhj5zu0abmgqn/master.m3u8",
      type: "application/vnd.apple.mpegurl",
      label: "auto"
    }],

    theta_hlsjs: {
      videoId: "video_q5t5z8z9semqrzhj5zu0abmgqn",
      userId: "YOUR_AUTHED_USER_ID",
      walletUrl: "wss://api-wallet-service.thetatoken.org/theta/ws",
      onWalletAccessToken: null,
      hlsOpts: null
    }
  };
  return (
    <div>
      <p>testng-player  </p>
      
      <div  className=' xl:w-[80%]  p-3 bg-red-600'>
    <VideoPlayer3
              options={videoJsOptions}
              onReady={() => console.log("The video is ready to play")}
      



  />
      </div>
      </div>
  )
}
