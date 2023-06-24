let currentZone = 'Home';

document.addEventListener('keypress', (k) => {
    if(k.key == ' ' || k.key == 'Enter') {
        k.preventDefault();
        k.target.click();
    }
});


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
let eHomeWrap2 = document.getElementsByClassName('homeWrap2');
for (let i=0; i < eHomeWrap2.length; i++) {
    eHomeWrap2[i].addEventListener("click", () => {
        let eHomeWrapToggle = eHomeWrap2[i].children[1];
        if (eHomeWrapToggle.style.display == '') {
            eHomeWrapToggle.style.display = 'block';
        } else {
            eHomeWrapToggle.style.display = '';
}})}

let homeSections = ['Token', 'Locker', 'Affiliate', 'Sale', 'Event', 'Approve', 'Stake'];
for (let i=0; i < homeSections.length; i++) {
    document.getElementById('home' + homeSections[i]).addEventListener("click", () => {
        let eHomeWrap = document.getElementById('homeWrap' + homeSections[i]);
        if (eHomeWrap.style.display == "") {
            eHomeWrap.style.display = "block";
        } else {
            eHomeWrap.style.display = "";
}})};
