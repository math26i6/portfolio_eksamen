window.addEventListener("load", sidenVises);
function sidenVises() {
        console.log("loaded");
        console.log("start animation")
        document.querySelector("#mand_sprite").classList.add("walk");
        document.querySelector("#mig").classList.add("flyv");
        setTimeout("location.href = 'forside.html';", 3400);
        }
