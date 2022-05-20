/*CHANGING THEMES*/


//accessed the user's machine theme
localStorage.getItem('theme');
const body=document.getElementById("body")
const toggle1 = document.getElementById("theme1");
const toggle2 = document.getElementById("theme2");
const toggle3 = document.getElementById("theme3");

const theme = window.localStorage.getItem("theme");
if(theme!=""){
    body.classList.remove("theme1")
    body.classList.add(theme);
}

toggle1.addEventListener("click", () => {
    if(body.classList.contains("theme2")){
        body.classList.remove("theme2");

    }
   if(body.classList.contains("theme3")){
        body.classList.remove("theme3");

    }
    body.classList.add("theme1");
    currTheme="theme1"


     window.localStorage.setItem("theme", "theme1");
});
toggle2.addEventListener("click", () => {
    if(body.classList.contains("theme1")){
        body.classList.remove("theme1");

    }
    if(body.classList.contains("theme3")){
        body.classList.remove("theme3");

    }
    body.classList.add("theme2");
    currTheme="theme2"



     window.localStorage.setItem("theme", "theme2");
});
toggle3.addEventListener("click", () => {
    if(body.classList.contains("theme2")){
        body.classList.remove("theme2");

    }
    if(body.classList.contains("theme1")){
        body.classList.remove("theme1");

    }
    body.classList.add("theme3");
    currTheme="theme3"


     window.localStorage.setItem("theme", "theme3");
});
/*CALCULATOR LOGIC*/
