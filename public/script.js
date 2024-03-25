const userVideo= document.getElementById('user-video')

window.addEventListener('load',async(e)=>{
       
       const media= await navigator
       .mediaDevices
       .getUserMedia({audio:true,video:true})


       //users own media
       userVideo.srcObject=media
})