let currentZone = 'Home';

document.addEventListener('keypress', (k) => {
    if(k.key == ' ' || k.key == 'Enter') {
        k.preventDefault();
        k.target.click();
    }
});

function setupToggleDisplay(wrap) {
    let eWrap = document.getElementsByClassName(wrap);
    for (let i=0; i < eWrap.length; i++) {
        eWrap[i].addEventListener("click", () => {
            let eWrapToggle = eWrap[i].children[1];
            if (eWrapToggle.style.display == '') {
                eWrapToggle.style.display = 'block';
            } else {
                eWrapToggle.style.display = '';
}})}}


//NAV
function displayRemoveZones() {
    for (let i=0; i < document.getElementsByClassName('zone').length; i++) {document.getElementsByClassName('zone')[i].style.display = 'none';}
    for (let i=0; i < document.getElementsByClassName('statsZone').length; i++) {document.getElementsByClassName('statsZone')[i].style.display = 'none';}
}
function displayZone(newZone) {
    currentZone = newZone;
    displayRemoveZones();
    document.getElementById('zone' + currentZone).style.display = 'block';
}

let eLinkHome = document.getElementsByName('linkHome');
let eLinkSocial = document.getElementsByName('linkSocial');
eLinkHome.forEach((e) => {e.addEventListener("click", () => {displayZone('Home')})});
eLinkSocial.forEach((e) => {e.addEventListener("click", () => {displayZone('Social')})});


//HOME
setupToggleDisplay('homeWrap2');
let homeSections = ['Token', 'Locker', 'Affiliate', 'Sale', 'Event', 'Approve', 'Stake'];
for (let i=0; i < homeSections.length; i++) {
    document.getElementById('home' + homeSections[i]).addEventListener("click", () => {
        let eHomeWrap = document.getElementById('homeWrap' + homeSections[i]);
        if (eHomeWrap.style.display == "") {
            eHomeWrap.style.display = "block";
        } else {
            eHomeWrap.style.display = "";
}})};

//SOCIAL
setupToggleDisplay('socialWrap');