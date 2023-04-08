function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
}



function dynamicProfile(){
    const container = document.getElementsByClassName("profile");          
    let data = [
              {
                heading: "Full name",
                link: "",
                target: "",
                name: "Prashant Kumar Singh",
              },
              {
                heading: "Mail me",
                link: "mailto:prashantsinghsca@gmail.com",
                target: "",
                name: "@Gmail",
              },
              {
                heading: "Contact on",
                link: "tel:+91735257915",
                target: "",
                name: "+91 7352579915",
              },
              {
                heading: "Github",
                link: "https://github.com/prashant17d97",
                target: "_blank",
                name: "@prashant17d97",
              },
              {
                heading: "LinkedIn",
                link: "https://www.linkedin.com/in/prashant-d97/",
                target: "_blank",
                name: "@prashant-d97/",
              },
            ];
          
    for (let i = 0; i < container.length; i++) {
              for (let j = 0; j < data.length; j++) {
                const outerCircle = document.createElement("div");
                outerCircle.classList.add("outer_circle_dot");
          
                const innerCircle = document.createElement("div");
                innerCircle.classList.add("inner_circle_dot");
                outerCircle.appendChild(innerCircle);
          
                const heading = document.createElement("p");
                heading.id="text_heading";
                heading.textContent = data[j].heading;
          
                const link = document.createElement("a");
                link.id="link_value";
                link.href = data[j].link;
                link.target = data[j].target;
                link.textContent = data[j].name;
          
                const profileContainer = document.createElement("div");
                profileContainer.classList.add("innerView");
                profileContainer.appendChild(outerCircle);
                profileContainer.appendChild(heading);
                profileContainer.appendChild(link);
          
                container[i].appendChild(profileContainer);
              }
       }

}

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

window.onload = function() {
    dynamicProfile();
    work();
    skills();
}