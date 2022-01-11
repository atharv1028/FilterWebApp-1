function preload()
{

}

function setup()
{
    
    canvas = createCanvas(450, 400);
    canvas.center();
}

function save()
{
    save('myFilterIamage.png');
}

function draw()
{
    image(video, 0, 0, 300, 300);
}