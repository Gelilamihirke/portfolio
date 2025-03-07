// home
let words = document.querySelectorAll(".word");
words.forEach((word)=>{
	let letters = word.textContent.split("");
	word.textContent="";
	letters.forEach((letter)=>{
		let span = document.createElement("span");
		span.textContent = letter;
		span.className = "letter";
		word.append(span);

	});
});
let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = " -1";

let changeText = ()=>{
	let currentWord = words[currentWordIndex];
	let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
	
	 Array.from(currentWord.children).forEach((letter, i)=>{
		setTimeout(()=>{
			letter.className= "letter out";
		}, i * 80);
	 });
	 nextWord.style.opacity="1";
	 Array.from(nextWord.children).forEach((letter,i)=>{
		letter.className = "letter behind";
		setTimeout(()=>{
			letter.className="letter in";
		},340 + i * 80);
	 });
	 currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

	};
	changeText();
	setInterval(changeText, 3000)

	//skill
	const circles = document.querySelectorAll('.circle');
	circles.forEach(elem=>{
		var dots = elem.getAttribute("data-dots");
		var marked = elem.getAttribute("data-percent");
		var percent = Math.floor(dots*marked/100);
		var points = "";
		var rotate = 360 / dots;


		for(let i = 0; i < dots ; i++){
			points += `<div class="points" style ="--i:${i}; --rot:${rotate}deg"></div>`;
		}
		elem.innerHTML = points;


		const pointsMarked = elem.querySelectorAll('.points');
		for(let i = 0; i<percent ; i++){
			pointsMarked[i].classList.add('marked');
		}
	})
	//portfolio
const galleryFilter = document.querySelector(".portfolio-filter"),
galleryItems = document.querySelectorAll(".portfolio-item");


galleryFilter.addEventListener("click", (event) => {
if (event.target.classList.contains("filter-item")) {
 
  galleryFilter.querySelector(".active").classList.remove("active");

  
  event.target.classList.add("active");

 
  const filterValue = event.target.getAttribute("data-filter");

  
  galleryItems.forEach((item) => {
	if (item.classList.contains(filterValue)) {
	  item.classList.remove("hide");
	} else {
	  item.classList.add("hide");
	}
  });
}
});
document.getElementById("sen").onclick

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".read-more-btn").forEach(button => {
		button.addEventListener("click", function (event) {
			event.preventDefault();
			let moreText = this.closest(".service-box").querySelector(".more-text");

			if (moreText.style.display === "none" || moreText.style.display === "") {
				moreText.style.display = "inline";
				this.textContent = "Read Less";
			} else {
				moreText.style.display = "none";
				this.textContent = "Read More";
			}
		});
	});
});
