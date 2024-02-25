function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    
    image(video,0,0,380,380);
}
function preload()
{

}
function star()
{
    od = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Objects are being detected";
    inpu = document.getElementById("inpu").value;
}
function modelLoaded()
{
    console.log("model has been loaded")
    stat = true;
}