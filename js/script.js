function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth"
  });
}

function scrollToTop() {
  // Check if smooth scrolling is supported
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    // Polyfill for browsers that do not support smooth scrolling
    var scrollToTopInterval = setInterval(function() {
      if (window.pageYOffset === 0) {
        clearInterval(scrollToTopInterval);
      } else {
        window.scrollBy(0, -20);
      }
    }, 16.7);
  }
}

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById('scrollToTop');
  if (window.pageYOffset > 0) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});


// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
  var scrollToTopBtn = document.getElementById('scrollToTop');
  if (window.pageYOffset > 0) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
window.onload = function() {
  work();
  skills();    
}
// Array of testimonial objects
// Data object with project details
const projectsData = [
  {
    imgSrc: "https://play-lh.googleusercontent.com/fYROMKylBQtsHqAT4ASS2dfPrFW0bwFGH978Iu38UV8mEuUXN68acv1LjlPlmRNs9Q=s64-rw",
    imgAlt: "image 1",
    title: "Shiplovo Courior",
    client: "Blandford sarl, Morrocow",
    workLocation: "Apptunix, Mohali Punjab",
    role: "Android Developer",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, beatae soluta quos voluptate reiciendis est nam neque. Commodi eveniet veniam, rerum obcaecati cupiditate assumenda nemo asperiores perferendis error. Assumenda, maxime?̥",
    link: "https://play.google.com/store/apps/details?id=com.shiplovo.driver"
  },
  {
    imgSrc: "https://play-lh.googleusercontent.com/uDYVS96Sh56K1D5IlKLHRV2-Mk7zIhi2HmyqDYoW3uRlGLuP5j_wiyDB5X-0yACaOEQ=s64-rw",
    imgAlt: "image 1",
    title: "Shiplovo",
    client: "Blandford sarl, Morrocow",
    workLocation: "Apptunix, Mohali Punjab",
    role: "Android Developer",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, beatae soluta quos voluptate reiciendis est nam neque. Commodi eveniet veniam, rerum obcaecati cupiditate assumenda nemo asperiores perferendis error. Assumenda, maxime?̥",
    link: "https://play.google.com/store/apps/details?id=com.shiplovo.customer"
  },
  {
    imgSrc: "https://play-lh.googleusercontent.com/krAkeWVUtPw04zMURHQWWqkEHA_542ET2KHzBb_-B3VJRyms8vqpbGA7OuBhX97xF7M=s64-rw",
    imgAlt: "image 1",
    title: "CURE: All Things Health",
    client: "CURE Group GmbH, Germany",
    workLocation: "Apptunix, Mohali Punjab",
    role: "Android Developer",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, beatae soluta quos voluptate reiciendis est nam neque. Commodi eveniet veniam, rerum obcaecati cupiditate assumenda nemo asperiores perferendis error. Assumenda, maxime?̥",
    link: "https://play.google.com/store/apps/details?id=app.getcure.customer"
  },
  // Add more project objects as needed
];

// Retrieve the parent element to append the project content
const projectContentWrapper = document.querySelector('.project-content.swiper-wrapper');

// Loop through the projects data and create HTML elements
for (const project of projectsData) {
  // Create slide div
  const slideDiv = document.createElement('div');
  slideDiv.classList.add('slide', 'swiper-slide');

  // Create img element
  const imgElem = document.createElement('img');
  imgElem.src = project.imgSrc;
  imgElem.alt = project.imgAlt;
  imgElem.classList.add('image');

  // Create details div
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details');

  // Create h2 element for title
  const titleElem = document.createElement('h2');
  titleElem.textContent = project.title;

  // Create other_details divs for client, work location, role, and description
  const otherDetailsDivs = [];
  const detailsKeys = ['client', 'workLocation', 'role', 'description'];
  for (const key of detailsKeys) {
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('other_details');
    const h3Elem = document.createElement('h4');
    h3Elem.textContent = key === 'client' ? 'Client:' : (key === 'workLocation' ? 'Work Location:' : (key === 'role' ? 'Role:' : 'Description:'));
    const pElem = document.createElement('p');
    pElem.textContent = project[key];
    detailDiv.appendChild(h3Elem);
    detailDiv.appendChild(pElem);
    otherDetailsDivs.push(detailDiv);
  }

  // Create link element
  const linkElem = document.createElement('a');
  linkElem.href = project.link;
  linkElem.target = '_blank';
  const buttonElem = document.createElement('button');
  buttonElem.classList.add('slider-button');
  buttonElem.textContent = 'Learn More...';
  linkElem.appendChild(buttonElem);

  // Append created elements to slide div
  detailsDiv.appendChild(titleElem);
  otherDetailsDivs.forEach(detailDiv => detailsDiv.appendChild(detailDiv));
  detailsDiv.appendChild(linkElem);
  slideDiv.appendChild(imgElem);
  slideDiv.appendChild(detailsDiv);

  // Append slide div to project content wrapper
  projectContentWrapper.appendChild(slideDiv);
}



var swiper = new Swiper(".swiper", {
  slidesPerView: 1.2,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  speed:1200,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



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
          icon:"resources/android.svg",
          position:"Android App\n Development",
          alt:"Android"
      },
      {
          icon:"resources/web_dev.svg",
          position:"Web\n Development",
          alt:"web_development.svg"
      },
      {
          icon:"resources/software_devlopment.svg",
          position:"Software\n Development",
          alt:"software_development.svg"
      },
      {
          icon:"resources/web_design.svg",
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
          icon:"resources/android.svg",
          position:"ANDROID",
          alt:"Android"
      },
      {
          icon:"resources/kotlin.png",
          position:"KOTLIN",
          alt:"kotlin.png"
      },
      {
          icon:"resources/jetpack-compose.png",
          position:"JETPACK COMPOSE",
          alt:"jetpack-compose.png"
      },
      {
          icon:"resources/java.png",
          position:"JAVA",
          alt:"java.png"
      },
      {
          icon:"resources/java_script.png",
          position:"JAVASCRIPT",
          alt:"java_script.png"
      },
      {
          icon:"resources/css.png",
          position:"CSS",
          alt:"css.png"
      },
      {
          icon:"resources/html.png",
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