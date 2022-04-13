function preload(){

}

function setup(){
canvas=createCanvas(400,400)
canvas.position(100,300)
video=createCapture(VIDEO)
video.hide();
tintcolor="" 
}

function draw(){
image(video,0,0,400,400)
tint(tintcolor)
}

function applyfilter(){
    tintcolor=document.getElementById("color").value
}

function take_snapshot(){
    save("selfie.png")
}