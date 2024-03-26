const userVideo= document.getElementById('user-video')
const startButton = document.getElementById('start-btn');
const socket=io();

const state = {
       media:null 
}

startButton.addEventListener('click',()=>{

   //High Bit rate can puts more load on the server CPU
   const mediaRecorder = new MediaRecorder(state.media,{
       // mimeType: 'video/webm;codecs=vp9',
       audioBitsPerSecond:128000,
       videoBitsPerSecond:2500000,
       framerate:25
   })
   
   
   mediaRecorder.ondataavailable = (e)=>{
      // console.log('Binary Stream Available', e.data)
      socket.emit('binaryStream',e.data)
   }
   

   /* 
    MediaRecorder will capture and encode chunks of media data
    from the stream every 25 milliseconds.
   */
   mediaRecorder.start(25)

})

window.addEventListener('load',async(e)=>{
       
       const media= await navigator
       .mediaDevices
       .getUserMedia({audio:true,video:true})

       
       
       //users own media
       userVideo.srcObject=media


       //state.media is a mediaStream parameter passed to 
       //MediaRecorder function 
       state.media=media
})