const header = document.querySelector("header")
const ham = document.querySelector(".ham")

window.onload = () => {
    window.scrollTo(0,0);
    header.style.backgroundColor = 'transparent';
    ham.style.backgroundColor = "var(--secondary-col)"
}

window.onscroll = function() {
    let isAtTop = (window.scrollY === 0);

    if (isAtTop) {
        header.style.boxShadow = 'none'; 
        header.style.backgroundColor = 'transparent';
    } else {
        header.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        header.style.backgroundColor = '#33383e';
    }
};




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


navLinks.forEach((ele)=>{
    ele.firstChild.addEventListener("click", (e) => {
        let active = document.querySelector(".active-link")
        active.classList.remove("active-link")
        
        ele.firstChild.classList.add("active-link")
    })
})

// active link

const sections = document.querySelectorAll('section[id]')


function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
      

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-links a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

// project item creation and toggle feature

function createAndAppendProject() {
    let projectItem = document.createElement("div")
    projectItem.classList.add("project-item")

    projectItem.innerHTML = `<h2>Project Title</h2>
    <p>
        <span>Technologies Used: </span>HTML, CSS, JS, REACT
    </p>
    <p class="project-desc">
        <span>Project Description: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus magnam modi quasi maxime ipsum unde, et possimus! Possimus unde aspernatur adipisci atque accusamus ducimus exercitationem. Nobis, nulla a, iusto iste eveniet consequuntur et aliquid provident adipisci corrupti ullam sapiente dolorum reiciendis voluptas laborum ad nemo earum molestias autem delectus. <span class="read-more ">... Read more</span>
    </p>

    <div><button class="btn">view Project<i class="fa-solid fa-angle-right"
        style="margin-inline: 6px;"></i></button></div>`

    return projectItem;
}

for (let i=0; i<6; i++) {
    let projectsCont = document.querySelector(".projects-cont")
    console.log(projectsCont);
    
    projectsCont.appendChild(createAndAppendProject())


}

let projectItems = Array.from(document.querySelectorAll(".project-item"))

console.log(projectItems)
projectItems.forEach((item)=>{
    let readMoreBtn = item.querySelector(".read-more")
    let projectDesc = item.querySelector(".project-desc")

    readMoreBtn.addEventListener("click", ()=>{
        projectDesc.classList.toggle("toggle-ReadMore")
        item.classList.toggle("toggle-ReadMore")
    
        if (projectDesc.offsetHeight>144) {
            readMoreBtn.textContent = "...Collapse"
        } else {
            readMoreBtn.textContent = "...Read more"
        }
    })
})

