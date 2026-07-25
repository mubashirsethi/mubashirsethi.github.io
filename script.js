// Typed Animation

new Typed(".typing",{

    strings:[
        "IT Support Engineer (L1/L2)",
        "Desktop Support Engineer",
        "Healthcare IT Specialist",
        "Windows Administrator",
        "Microsoft 365 Support",
        "VMware Administrator"
    ],

    typeSpeed:70,

    backSpeed:40,

    loop:true

});


// AOS

AOS.init({

    duration:1000,

    once:true

})
// Animated Counters

const counters = document.querySelectorAll(".counter");

const startCounter = (counter)=>{

const target = +counter.dataset.target;

let count = 0;

const speed = target/60;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

};

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(entry.target);

observer.unobserve(entry.target);

}

});

});

counters.forEach(counter=>observer.observe(counter));
/*=========================
SKILL PROGRESS
=========================*/

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bar = entry.target;

bar.style.width = bar.dataset.width + "%";

skillObserver.unobserve(bar);

}

});

});

skillBars.forEach(bar=>skillObserver.observe(bar));
//active-navbar
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const top = section.offsetTop - 150;

const height = section.offsetHeight;

if(window.scrollY >= top && window.scrollY < top + height){

current = section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});
// Make email links copy to clipboard instead of relying on mailto:
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Stop the default mailto: behavior
        const email = this.getAttribute('href').replace('mailto:', '');
        
        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            alert('✅ Email address copied: ' + email);
        }).catch(() => {
            // Fallback for older browsers
            prompt('Copy this email address:', email);
        });
    });
});
        }

    });

}); */
;
