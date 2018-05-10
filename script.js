// declering some constants that will be used later

const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const linear1 = document.getElementById("linear1");
const linear2 = document.getElementById("linear2");
const linear3 = document.getElementById("linear3");

/* Each of the setGradient functions has the function to change
   the background to a gradient. The choice is between linear-gradient,
   linear-gradient to right and linear-gradient to bottom right.
*/
function setGradient1() {
	body.style.background = 
	"linear-gradient(" 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = "border: " + body.style.background + ";";
};

function setGradient2() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = "border: " + body.style.background + ";";
};

function setGradient3() {
	body.style.background = 
	"linear-gradient(to bottom right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = "border: " + body.style.background + ";";
};

/* This function will check witch checkbox is checked 
and run the coresponding function
*/
function choose() {
	if(linear1.checked){
		setGradient1();
	}else if(linear2.checked){
		setGradient2();
	}else{
		setGradient3();
	};
}
// Added event listeners to the elements.
linear2.addEventListener("click", setGradient2);

linear1.addEventListener("click", setGradient1);

linear3.addEventListener("click", setGradient3);

color1.addEventListener("input", choose);

color2.addEventListener("input", choose);