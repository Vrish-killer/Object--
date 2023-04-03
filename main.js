Status = "";


function setup () {
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createVideo(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Modal Loaded");
    Status = true;
}

function draw(){
image(video, 0, 0, 480, 380);
}
