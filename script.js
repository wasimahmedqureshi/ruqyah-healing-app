var audio=document.getElementById("audio")
var title=document.getElementById("title")
var progress=document.getElementById("progress")

var playlist=[

{title:"Surah Fatiha",file:"audio/fatiha.mp3"},
{title:"Ayatul Kursi",file:"audio/ayatul_kursi.mp3"},
{title:"Surah Ikhlas",file:"audio/ikhlas.mp3"},
{title:"Surah Falaq",file:"audio/falaq.mp3"},
{title:"Surah Naas",file:"audio/naas.mp3"}

]

var index=0
var repeatCount=0

function loadTrack(i){

audio.src=playlist[i].file
title.innerText=playlist[i].title

}

loadTrack(index)

function playAudio(){

audio.play()

}

function pauseAudio(){

audio.pause()

}

function nextTrack(){

index++

if(index>=playlist.length){

index=0

}

repeatCount=0
loadTrack(index)
playAudio()

}

function prevTrack(){

index--

if(index<0){

index=playlist.length-1

}

repeatCount=0
loadTrack(index)
playAudio()

}

audio.addEventListener("ended",function(){

repeatCount++

if(repeatCount<3){

audio.currentTime=0
audio.play()

}

else{

nextTrack()

}

})

audio.addEventListener("timeupdate",function(){

if(audio.duration){

progress.value=(audio.currentTime/audio.duration)*100

}

})

progress.addEventListener("input",function(){

if(audio.duration){

audio.currentTime=(progress.value/100)*audio.duration

}

})

if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js")

}
