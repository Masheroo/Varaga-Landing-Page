let btn = document.getElementById('menu');
let list = document.getElementById('nav-bar-mobile');
btn.addEventListener('click', ()=>{
    list.classList.toggle('res');
    console.log(1);
});
const images = document.querySelectorAll('.slider-phone');
const sliderLine = document.querySelector('.slider-line');
const slider = document.querySelector('.slider');

let count = 0;
let width;
let height;
function init (){
	width = slider.offsetWidth;
	height = slider.offsetHeight;
	console.log(width);
	sliderLine.style.width = width * images.lenght + 'px';
	images.forEach(item =>{
		item.style.height = 'auto';
		item.style.width = width + 'px';
	});
}
function rollSlider(){	
	sliderLine.style.transform = 'translate(-' + width * count +'px)';
}
window.addEventListener('resize', ()=>{
	init();
});
document.querySelector('.next').addEventListener('click', ()=>{
	count++;
	if(count >= 2){
		count = 0;
	}
	console.log(count);
	rollSlider();
});
document.querySelector('.prev').addEventListener('click', ()=>{
	count--;
	if(count < 0){
		count = 1;
	}
	console.log(count);
	rollSlider();
});
init();