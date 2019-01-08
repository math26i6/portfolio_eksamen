window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("loaded");
    console.log("start animation")
    document.querySelector("#mand_sprite").classList.add("walk");
    document.querySelector("#burger").addEventListener("click", menuClick);
    document.querySelector("#mand_sprite").addEventListener("animationend", sideForsvind);
}

function menuClick() {
    console.log("open");
    document.querySelector("#topnav").classList.remove("hide");
    document.querySelector("#burger").removeEventListener("click", menuClick);
    document.querySelector("#burger").classList.add("change");
    document.querySelector("#burger").classList.add("burgeropen");
    document.querySelector("#burger").addEventListener("click", menuLuk);

}

function menuLuk() {
    console.log("closed");
    document.querySelector("#topnav").classList.add("hide");
    document.querySelector("#burger").removeEventListener("click", menuLuk);
    document.querySelector("#burger").classList.remove("change");
    document.querySelector("#burger").classList.remove("burgeropen");
    sidenVises();

}

function sideForsvind() {
    console.log("sideForsvind");
    document.querySelector("#mand_sprite").classList.add("hide");
    document.querySelector("#intro").classList.add("forsvind");

    setTimeout(sideGone, 2500);
}

function sideGone() {
    console.log("side gone");

    document.querySelector("#intro").classList.add("hide");


}
