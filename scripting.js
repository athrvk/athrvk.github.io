var img1hover = document.querySelector("#img1");
var img4hover = document.querySelector("#img4");
var img6hover = document.querySelector("#img6");

img1hover.addEventListener('mouseover', function () {
    document.querySelector("#aboutMeDiv").style.color ="White";
    document.querySelector("#aboutMeHeading").style.color ="White";
});

img1hover.addEventListener('mouseout', function () {
    document.querySelector("#aboutMeDiv").style.color = null;
    document.querySelector("#aboutMeHeading").style.color = null;
});


img4hover.addEventListener('mouseover', function () {
    document.querySelector("#aboutMeDiv").style.color ="White";
    document.querySelector("#aboutMeHeading").style.color ="White";
});

img4hover.addEventListener('mouseout', function () {
    document.querySelector("#aboutMeDiv").style.color = null;
    document.querySelector("#aboutMeHeading").style.color = null;
});


img6hover.addEventListener('mouseover', function () {
    document.querySelector("#aboutMeDiv").style.color ="White";
    document.querySelector("#aboutMeHeading").style.color ="White";
});

img6hover.addEventListener('mouseout', function () {
    document.querySelector("#aboutMeDiv").style.color = null;
    document.querySelector("#aboutMeHeading").style.color = null;
});
