var shuffleButton = document.getElementById("shuffleBtn");


function shuffleImgs() {
    for(var i=0;i<6;i++){
        document.querySelectorAll("li.images")[i].style.order = String(Math.floor(Math.random()*7));
    }
}

shuffleButton.addEventListener('click', shuffleImgs);

var imgelem = [document.querySelector("#img1"),
               document.querySelector("#img4"),
               document.querySelector("#img6")];

for(var i =0;i<imgelem.length;i++){
    imgelem[i].addEventListener('mouseover', function () {
        document.querySelector("#aboutMeDiv").style.color ="White";
        document.querySelector("#aboutMeHeading").style.color ="White";
    });

    imgelem[i].addEventListener('mouseout', function () {
        document.querySelector("#aboutMeDiv").style.color = null;
        document.querySelector("#aboutMeHeading").style.color = null;
    });
}
