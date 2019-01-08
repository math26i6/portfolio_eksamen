window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("loaded");
    document.querySelector("#burger").addEventListener("click", menuClick);
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
