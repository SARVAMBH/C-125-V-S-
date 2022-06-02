NoseX = 0;
NoseY = 0;
difference = 0;
RightWristX = 0;
LeftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(750,600);
    canvas.position(700,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw() {
    background("#26989c");

      document.getElementById("square_side").innerHTML = "Width And Height of the square will be - " + difference+"px";

    fill("#bada55");
    stroke("#7b4466");
    square(NoseX , NoseY , difference);

}

function modelLoaded() {
    console.log('PoseNet Is Initialised!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("NoseX = " +NoseX + "NoseY" +NoseY);
        RightWristX = results[0].pose.rightWrist.x;
        LeftWristX = results[0].pose.leftWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("LeftWristX" + LeftWristX + "RightWristX" + RightWristX + "difference" + difference);
    }
}