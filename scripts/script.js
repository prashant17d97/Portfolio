function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
}



// function dynamicProfile(){
//     const container = document.getElementsByClassName("profile");          
//     let data = [
//               {
//                 heading: "Full name",
//                 link: "",
//                 target: "",
//                 name: "Prashant Kumar Singh",
//               },
//               {
//                 heading: "Mail me",
//                 link: "mailto:prashantsinghsca@gmail.com",
//                 target: "",
//                 name: "@Gmail",
//               },
//               {
//                 heading: "Contact on",
//                 link: "tel:+91735257915",
//                 target: "",
//                 name: "+91 7352579915",
//               },
//               {
//                 heading: "Github",
//                 link: "https://github.com/prashant17d97",
//                 target: "_blank",
//                 name: "@prashant17d97",
//               },
//               {
//                 heading: "LinkedIn",
//                 link: "https://www.linkedin.com/in/prashant-d97/",
//                 target: "_blank",
//                 name: "@prashant-d97/",
//               },
//             ];
          
//     for (let i = 0; i < container.length; i++) {
//               for (let j = 0; j < data.length; j++) {
//                 const outerCircle = document.createElement("div");
//                 outerCircle.classList.add("outer_circle_dot");
          
//                 const innerCircle = document.createElement("div");
//                 innerCircle.classList.add("inner_circle_dot");
//                 outerCircle.appendChild(innerCircle);
          
//                 const heading = document.createElement("p");
//                 heading.id="text_heading";
//                 heading.textContent = data[j].heading;
          
//                 const link = document.createElement("a");
//                 link.id="link_value";
//                 link.href = data[j].link;
//                 link.target = data[j].target;
//                 link.textContent = data[j].name;
          
//                 const profileContainer = document.createElement("div");
//                 profileContainer.classList.add("innerView");
//                 profileContainer.appendChild(outerCircle);
//                 profileContainer.appendChild(heading);
//                 profileContainer.appendChild(link);
          
//                 container[i].appendChild(profileContainer);
//               }
//        }

// }

function work(){
    const servicesContainer = document.getElementsByClassName("services");
    let works=[
        {
            icon:"..\\resource\\android.svg",
            position:"Android App\n Development",
            alt:"Android"
        },
        {
            icon:"..\\resource\\web_dev.svg",
            position:"Web\n Development",
            alt:"web_development.svg"
        },
        {
            icon:"..\\resource\\software_devlopment.svg",
            position:"Software\n Development",
            alt:"software_development.svg"
        },
        {
            icon:"..\\resource\\web_design.svg",
            position:"Web\nDesign",
            alt:"web_design.svg"
        },
    ]

    for(let i=0; i < servicesContainer.length; i++){
        for(let j=0; j < works.length; j++){
    
            const image = document.createElement("img");
            image.src=works[j].icon
            image.alt=works[j].alt

            const position = document.createElement("p");
            position.textContent=works[j].position

            const work = document.createElement("div");
            work.classList.add("work");
            work.appendChild(image);
            work.appendChild(position);
            servicesContainer[i].appendChild(work);
        }
    }
}

function skills(){
    const servicesContainer = document.getElementsByClassName("Skills_Container");
    let works=[
        {
            icon:"..\\resource\\android.svg",
            position:"ANDROID",
            alt:"Android"
        },
        {
            icon:"..\\resource\\kotlin.png",
            position:"KOTLIN",
            alt:"kotlin.png"
        },
        {
            icon:"..\\resource\\jetpack-compose.png",
            position:"JETPACK COMPOSE",
            alt:"jetpack-compose.png"
        },
        {
            icon:"..\\resource\\java.png",
            position:"JAVA",
            alt:"java.png"
        },
        {
            icon:"..\\resource\\java_script.png",
            position:"JAVASCRIPT",
            alt:"java_script.png"
        },
        {
            icon:"..\\resource\\css.png",
            position:"CSS",
            alt:"css.png"
        },
        {
            icon:"..\\resource\\html.png",
            position:"HTML",
            alt:"html.png"
        },
    ]

    for(let i=0; i < servicesContainer.length; i++){
        for(let j=0; j < works.length; j++){
    
            const image = document.createElement("img");
            image.src=works[j].icon
            image.alt=works[j].alt

            const position = document.createElement("p");
            position.textContent=works[j].position

            const work = document.createElement("div");
            work.appendChild(image);
            work.appendChild(position);
            servicesContainer[i].appendChild(work);
        }
    }
    loadProject();
}

function downloadCV() {
    const doc = new jsPDF();
    const content = document.getElementById("pdfContent");
  
    doc.html(content, {
      callback: function () {
        
        doc.save("AtomicKotlin-sample.pdf");
      },
    });
}

function loadProject() {
    // Sample data object
    const projectsData = [
        {
          image: "img_1.jpg",
          title: "Shiplovo",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis dicta optio esse, pariatur corrupti. Fuga nostrum facilis recusandae, ipsam dicta distinctio eius accusantium debitis, expedita sequi in optio! Ab?",
          link: "https://example.com/shiplovo"
        },
    
        {
            image: "img_1.jpg",
            title: "Shiplovo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis dicta optio esse, pariatur corrupti. Fuga nostrum facilis recusandae, ipsam dicta distinctio eius accusantium debitis, expedita sequi in optio! Ab?",
            link: "https://example.com/shiplovo"
          },
        // Add more projects data objects here...
      ];
      
      // Get the container element
      const projectsContainer = document.querySelector(".projects");
      
      // Loop through the data objects and create the HTML elements
      projectsData.forEach(project => {
        // Create the project holder div
        const projectHolder = document.createElement("div");
        projectHolder.classList.add("projectHolder");
      
        // Create the image element and set its src attribute
        const image = document.createElement("img");
        image.src = project.image;
        projectHolder.appendChild(image);
      
        // Create the div element for the project details
        const projectDetails = document.createElement("div");
      
        // Create the h2 element for the project title and set its text content
        const title = document.createElement("h2");
        title.textContent = project.title;
        projectDetails.appendChild(title);
      
        // Create the p element for the project description and set its text content
        const description = document.createElement("p");
        description.textContent = project.description;
        projectDetails.appendChild(description);
      
        // Create the button element for the project link and set its text content and href attribute
        const button = document.createElement("button");
        button.textContent = "Learn More";
        button.href = project.link;
        projectDetails.appendChild(button);
      
        projectHolder.appendChild(projectDetails);
        projectsContainer.appendChild(projectHolder);
      });
    
    initGallery();
}
var slideIndex,slides;
function initGallery(){
    slideIndex = 0;
    slides=document.getElementsByClassName("projectHolder");
    slides[slideIndex].style.opacity=1;

    if(slides.length<2){
        var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display="none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtns[i].style.display="none";
        }
    }
    setTimer();
}

function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    var slideTextAnimClass;
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "projectHolder";
            slides[i].style.opacity=0;
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        slideIndex=n;
        
    }

}
var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },5000);
}

function playPauseSlides() {
    var playPauseBtn=document.getElementById("playPause");
    if(timer==null){
        setTimer();
        playPauseBtn.style.backgroundPositionY="0px"
    }else{
        clearInterval(timer);
        timer=null;
        playPauseBtn.style.backgroundPositionY="-33px"
    }
}
    

window.onload = function() {
    work();
    skills();
   
}


  




