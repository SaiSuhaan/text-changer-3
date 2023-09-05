leftWristX = 0;
rightWristX = 0;
difference = 0;
noseX = 0;
noseY = 0;
function preload(){

} 
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 420);
    canvas.position(560, 180);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
   {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
   }
}

function draw(){
background("white");
textSize(difference);
fill("blue");
text("SUHAAN",50,400);
}
function modelLoaded(){
    console.log("model loaded!");
}
