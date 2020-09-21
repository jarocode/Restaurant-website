const grilledBeef = document.querySelector('.grilled-beef');
const grill = [...grilledBeef.children];
const landingHeader = document.querySelector('.landing-header');
const width = window.innerHeight;
const about = document.querySelector('.about-content');
const services = document.querySelector('.catering');
const specialities = document.querySelector('.menu');
const chef= document.querySelector('.master-chef');
const blog = document.querySelector('.blog-header');
const numbers = document.querySelectorAll('.number');
const footerIcons = document.querySelectorAll('.footer-icons');
const chefCard =  document.querySelectorAll('.chef-card');
const iconUl =  document.querySelectorAll('.icon-ul');
const navbar = document.getElementById('#nav');
const descp = document.querySelector('.descp');
const gallery = document.querySelectorAll('.specialities-card');
console.log(gallery);

let newGallery = [...gallery];
console.log(newGallery);

// document.styleSheets[3].insertRule(".nav_animate {background: #fff; display: fixed}",0);
// console.log(document.styleSheets[3]);



const consecutiveAnimation = (arr) => {
    arr.forEach((el, index) => el.style.transition = `all 0.5s ease-in-out ${index/7 + 0.1}s`);
}
consecutiveAnimation(grill);

//Navbar animation

// <header/> animation
window.addEventListener('DOMContentLoaded', () => {
    let all = [landingHeader,...grill];
    all.forEach(el => el.classList.add('animate'));
    consecutiveAnimation(footerIcons);
    consecutiveAnimation(chefCard);
    
    iconUl.forEach(el => consecutiveAnimation([...el.children]));
    
});

let iconArray = [];
iconUl.forEach(el => {
    iconArray.push(...el.children);
});

console.log(iconArray);




// Header Animation function
const headerAnimation = (...element) => {
    let elementArray = [...element];
    elementArray.forEach(element => {
        element.getBoundingClientRect().top < width && element.classList.add('animate');
    });
}

//Body animation
window.addEventListener('scroll', () => {
    headerAnimation(about, services, specialities, chef, blog, ...footerIcons, ...chefCard, ...iconArray, ...newGallery);
    descp.getBoundingClientRect().top < -32 ? navbar.classList.add('nav_animate') : 
    navbar.classList.remove('nav_animate');
});

//Number Animation

let count = 450;
numbers.forEach(no => {
    const updateCount = () => {
        value = +no.innerText;
        let numb = parseInt(no.getAttribute('data-target'));
        let increment = parseInt(numb) / count;
        newValue = Math.ceil(value + increment);
        // console.log(newValue);
        if(newValue  >= numb){
            no.innerText = Math.round(newValue);
        }else{
            no.innerText = newValue;
            setTimeout(updateCount, 1);
        }
    }
    updateCount();
});











