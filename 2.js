lipX=0;
lipY=0;


function preload(){
    img1= loadImage("1.png");
     img2= loadImage("1.png");
     img3= loadImage("1.jpg");
     img4= loadImage("3.png");
     
 
 }
 
 
 function setup(){
 
    Canvas=createCanvas(600,480);
    Canvas.position(500,250);
    Vid=createCapture(VIDEO);
    Vid.hide();

poseNet=ml5.poseNet(Vid,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}
 
 
 
 function draw(){
 
     image(Vid,0,0,600,480);
     image(img1,0,0,100,480);
     image(img2,500,0,100,480);
     image(img3,1,2,600,100);
     image(img4,1,450,600,50);
    
 
     
 
 }

 function gotPoses(results){
    if (results.length>0){
        console.log(results);
        lipX=results[0].pose.nose.x-75;
        lipY=results[0].pose.nose.y+10;
        console.log("The X value of nose is"+ results[0].pose.nose.x);
        console.log("The Y value of nose is"+ results[0].pose.nose.y);
        
    }
}
 
 
 
 function takesnapshot(){
 
     save('selfie.png');
 
 }
 