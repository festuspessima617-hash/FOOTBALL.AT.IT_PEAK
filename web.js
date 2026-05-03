
const upload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");

if(upload){
upload.addEventListener("change", function(){
const file = this.files[0];
if(file){
preview.src = URL.createObjectURL(file);
}
});
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if(target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});


const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, observerOptions);


document.querySelectorAll('.card').forEach(card => {
card.style.opacity = '0';
card.style.transform = 'translateY(30px)';
card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
observer.observe(card);
});


document.querySelectorAll('.section').forEach(section => {
section.style.opacity = '0';
section.style.transform = 'translateY(30px)';
section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
observer.observe(section);
});


window.addEventListener('scroll', () => {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 50) {
navbar.style.background = 'rgba(17, 24, 39, 0.98)';
navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
} else {
navbar.style.background = 'rgba(17, 24, 39, 0.95)';
navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
}
});


document.querySelectorAll('.gallery img').forEach(img => {
img.addEventListener('click', () => {
const modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.background = 'rgba(0,0,0,0.9)';
modal.style.display = 'flex';
modal.style.alignItems = 'center';
modal.style.justifyContent = 'center';
modal.style.zIndex = '10000';
modal.style.cursor = 'pointer';

const modalImg = document.createElement('img');
modalImg.src = img.src;
modalImg.style.maxWidth = '90%';
modalImg.style.maxHeight = '90%';
modalImg.style.borderRadius = '10px';

modal.appendChild(modalImg);
document.body.appendChild(modal);

modal.addEventListener('click', () => {
document.body.removeChild(modal);
});
});
});


document.querySelectorAll('form').forEach(form => {
form.addEventListener('submit', (e) => {
const requiredFields = form.querySelectorAll('[required]');
let isValid = true;

requiredFields.forEach(field => {
if (!field.value.trim()) {
field.style.borderColor = '#ff4757';
isValid = false;
} else {
field.style.borderColor = 'rgba(255, 255, 255, 0.2)';
}
});

if (!isValid) {
e.preventDefault();
alert('Please fill in all required fields.');
}
});
});


function typeWriter(element, text, speed = 50) {
let i = 0;
element.textContent = '';
function type() {
if (i < text.length) {
element.textContent += text.charAt(i);
i++;
setTimeout(type, speed);
}
}
type();
}




function animateCounter(element, target, duration = 2000) {
const start = 0;
const increment = target / (duration / 16);
let current = start;

const timer = setInterval(() => {
current += increment;
if (current >= target) {
element.textContent = target;
clearInterval(timer);
} else {
element.textContent = Math.floor(current);
}
}, 16);
}


document.querySelectorAll('.stat h3').forEach(stat => {
const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
if (target) {
animateCounter(stat, target);
}
});

window.addEventListener('scroll', () => {
const hero = document.querySelector('.hero');
if (hero) {
const scrolled = window.pageYOffset;
hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
}
});