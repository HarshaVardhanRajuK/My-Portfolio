let themetoggleBtn = document.getElementById("checkbox");
console.log(themetoggleBtn.checked);

function themeToggle() {
    // console.log(themetoggleBtn.checked);
    
    if (themetoggleBtn.checked){
        document.documentElement.style.setProperty('--text-col', '#444');
        document.documentElement.style.setProperty('--primary-bg', '#fff');
        document.documentElement.style.setProperty('--header-bg', '#36bdf4');
        document.documentElement.style.setProperty('--active-link', '#fff');
        document.documentElement.style.setProperty('--project-card', '#89d1ef');
    }else {
        document.documentElement.style.setProperty('--text-col', '#fff');
        document.documentElement.style.setProperty('--primary-bg', '#35155D');
        document.documentElement.style.setProperty('--header-bg', '#512B81');
        document.documentElement.style.setProperty('--active-link', '#36bdf4');
        
        document.documentElement.style.setProperty('--project-card', 'linear-gradient(to bottom, rgb(207, 79, 117),rgb(134, 60, 60)');
    }
}



const ham = document.querySelector(".ham")

ham.addEventListener("click",()=>{
    console.log("logged");
    
    const nav = document.querySelector(".nav-links")
    const visibility = nav.getAttribute("data-visible")
    let icon = document.querySelector(".fa-solid")
    
    if (visibility == "false") {
        nav.setAttribute("data-visible", "true")
        Array.from(ham.children).map((e)=>{
            e.setAttribute("data-expanded", "true")
        })
        // icon.classList.remove("fa-bars")
        // icon.classList.add("fa-xmark")
        
        
    }else {
        nav.setAttribute("data-visible", "false")
        Array.from(ham.children).map((e)=>{
            e.setAttribute("data-expanded", "false")
        })
        // icon.classList.add("fa-bars")
        // icon.classList.remove("fa-xmark")
    }
})

let navLinks = Array.from(document.querySelector(".nav-links").children)

console.log(navLinks);


navLinks.forEach((ele)=>{
    ele.firstChild.addEventListener("click", (e) => {
        let active = document.querySelector(".active-link")
        active.classList.remove("active-link")
        
        ele.firstChild.classList.add("active-link")
    })
})