function moreInfo() {
    alert('Mehr Informationen kommen bald!');
}
function toggleNavbar() {
    var x = document.getElementsByClassName("navbar")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
