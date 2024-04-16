Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("camera");
Webcam.attach("#camera");
function takeSnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>"
})

}

console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ovRYzWyOv/model.json",modelLoaded);
function modelLoaded(){
 console.log("modelLoaded")   
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first prediction is..." + prediction1 
    speak_data2="The second prediction is..." + prediction2
    speak_data3="The third prediction is..." + prediction3
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2 + speak_data3);
    synth.speak(utterThis);
}

function check(){
img=document.getElementById("captured_image");
classifier.classify(img , gotResult);
}

function gotResult(result){
   
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML=result[0].label;
        document.getElementById("result_emotion_name2").innerHTML=result[1].label;
        document.getElementById("result_emotion_name3").innerHTML=result[2].label;

        prediction1=result[0].label;
        prediction2=result[1].label;
        prediction3=result[2].label;
        speak();
        
        if (result[0].label=="Happy"){
            document.getElementById("update_emoji").innerHTML="&#128522";
        }
        if (result[0].label=="sad"){
            document.getElementById("update_emoji").innerHTML="&#128532";
        }
        if (result[0].label="angy"){
            document.getElementById("update_emoji").innerHTML="&#128548";
        }
        if (result[0].label="wow"){
            document.getElementById("update_emoji").innerHTML="&#697488";
        }


        if (result[1].label=="happy"){
            document.getElementById("update_emoji2").innerHTML="&#128522";
        }
        if (result[1].label=="sad"){
            document.getElementById("update_emoji2").innerHTML="&#128532";
        }
        if (result[1].label="angry"){
            document.getElementById("update_emoji2").innerHTML="&#128548";
        }
        if (result[1].label="wow"){
            document.getElementById("update_emoji2").innerHTML="&#697488";
        }


        if (result[2].label=="happy"){
            document.getElementById("update_emoji3").innerHTML="&#128522";
        }

        if (result[2].label=="sad"){
            document.getElementById("update_emoji3").innerHTML="&#128532";
        }
        if (result[2].label="angry"){
            document.getElementById("update_emoji3").innerHTML="&#128548";
        }
        if (result[2].label="wow"){
            document.getElementById("update_emoji3").innerHTML="&#697488";
        
    }
} 