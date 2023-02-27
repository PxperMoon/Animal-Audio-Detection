var bg_noise = 0;
var barking = 0;
var meowing = 0;
var mooing = 0;
var roaring = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_Efo5cxQU/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("Got results.");

    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sound_detected").innerHTML = 'The detected sound is of  - '+ results[0].label;
        document.getElementById("number_of_sounds").innerHTML = 'Dogs Detected - ' + barking + ', Cats Detected - ' + meowing + ', Cows Detected - ' + mooing + ', Lion/Tiger detected - ' + roaring;
        document.getElementById("sound_detected").style.color = "rgb(" + red + ", " + green + ", " + blue +")";
        document.getElementById("number_of_sounds").style.color = "rgb(" + red + ", " + green + ", " + blue +")";
    
        img = document.getElementById('animal_image');
    
        if (results[0].label == "Barking") {
          img.src = 'dog barking.png';
          barking = barking + 1;
        } else if (results[0].label == "Meowing") {
          img.src = 'cat meowing.png';
          meowing = meowing + 1;
        } else if (results[0].label == "Mooing") {
            img.src = 'cow mooing.png';
            mooing = mooing + 1;
        } else if (results[0].label == "Roaring") {
                img.src = 'lion roaring.png';
                roaring = roaring + 1;
        } else{
          img.src = 'ear.jpeg';}
