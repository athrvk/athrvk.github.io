var shuffleButton = document.getElementById("shuffleBtn");


function shuffleImgs() {
    for(var i=0;i<6;i++){
        document.querySelectorAll("li.images")[i].style.order = String(Math.floor(Math.random()*7));
    }
}

function scrollUp(){
    $('html, body').animate({scrollTop:0}, '250');
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

window.addEventListener("scroll",function(){
    var target = $('#aboutMeDiv');
    if(window.innerWidth > 576){
        if(window.pageYOffset > 1200){
            target.fadeOut(150);
            // target.style.marginLeft = '0';
            // target.style.position = "static";
        }
        else if(window.pageYOffset < 1200){
            target.fadeIn(500);
            // target.style.marginLeft = '66%';
            // target.style.position = "fixed";
        }
    }

},false);