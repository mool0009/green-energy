/*
---------------------------------
DECLARING AND ASSIGNING VARIABLES
--------------------------------- */
/* 
Declare variables:
masthead (HTML container storing 
the current slide - slide-show part)

slides (array of elements storing 
all slides - slide-show part)

buttons (collected list of 
3 buttons in array - main content hide/reveal part)

contents (array of 3 elements - contents 
in main content hide/reveal part)

container (HTML element that will get a content
from array contents)

i (variable to be used as index-pointer 
inside loops for slide-show part)

k (variable to be used as index-pointer
inside loops for hide/reveal content part) */
var masthead
	, slides
	, buttons
	, contents
	, container
	, i
	, k;
/* 
Access empty div with the 
class "mh-image" (look at the HTML structure 
above), and pass the reference
to variable masthead */
masthead = document.querySelector(".mh-image");
/* 
Assign 4 elements to array slides
(slide-show content) */
slides = [
	"<figure><img src=\"./img/mh_wind_energy.jpg\" alt =\"wind energy\"><figcaption> Harnessing the power of wind. </figcaption></figure>",
	"<figure><img src=\"./img/mh_rain_water.jpg\" alt = \"rain water\"><figcaption> Rainwater, every drop counts. </figcaption></figure>",
	"<figure><img src=\"./img/mh_solar_2.jpg\" alt = \"solar energy\"><figcaption> Affordable energy using the sun. </figcaption></figure>",
	"<figure><img src=\"./img/mh_solar.jpg\" alt = \"solar power\"><figcaption> Solar power, an investment well worth it.</figcaption></figure>"
];
/* 
Define function fadeOut. This function will 
make currently displayed slide disappear. */
/* 
Use style object with property opacity 
on masthead and set it to 0. */
/* 
End function fadeOut. */
function fadeOut() {
	"use strict";
	masthead.style.opacity = 0;
}
i = 0;
function runSlides() {
	"use strict";
	masthead.style.opacity = 1;
	if (i > 3) {
		i = 0;
	}
	masthead.innerHTML = slides[i];
	i += 1;
	setTimeout(fadeOut, 5000);
}
runSlides();
setInterval(runSlides, 6000);
/* 
Collect all buttons in array buttons. 

Have all contents in array contents. 

Access div with the class "container"
and pass the reference to variable container.*/
var buttons = document.querySelectorAll(".btn");
var container = document.querySelector(".container");
contents = [
	
	// reference: http://www.moneycrashers.com/green-energy-technologies-solutions-home-improvement/
	"<img src=\"./img/solar_inside.jpg\" alt =\"wind energy\"><p>Solar Energy Solar panels, or photovoltaic cells, are one of the best ways to reduce pollution and lower your electricity expenses The average cost of installation for the typical solar array comes in at around $30,000, before green energy tax credits, rebates, and incentives, which help you recoup much of the initial expense. Speak with us and let'st find solutions that fit your budget.</p>", 
	"<img src=\"./img/wind_inside.jpg\" alt =\"wind energy\"><p>When you think of wind generators, the first thing that comes to mind is likely the huge windmill farms found offshore and in the windswept plains of the western United States. But did you know that you can actually purchase smaller versions of these massive power generators? Many kit based generators will produce only enough power to offset 10-15% of your home energy costs. </p>", 
	"<img src=\"./img/rain_inside.jpg\" alt =\"wind energy\"><p>Rain Water.Rain collector systems are extremely simple mechanical systems that connect to a gutter system or other rooftop water collection network and store rain water in a barrel or cistern for later non-potable use (like watering plants, flushing toilets, and irrigation). These systems are extremely inexpensive, provided you purchase and assemble the rain collection equipment yourself. If you pay a contractor to install the rain collection system, it could cost you anywhere from several hundred dollars and up.</p>"

];
/*



Pass the value of the first array-element of array contents
to container (use innerHTML on container). */
container.innerHTML = contents[0];
/* 
Define function handleClick 
(pass event object to function) */
/* 
  Loop through buttons array and
  use removeAttribute() to remove 
  id with the value active from an HTML element 
  that contains this id (use hasAttribute() in if-statement to check). */
/* 
Use innerHTML on ev.target to check which button
was clicked. Based on this, display corresponding array 
element inside <div class="container"></div> */
/*
Add the class active to clicked list item (use ev.target) */
function handleClick(ev) {
	"use strict";
	for (i = 0; i < buttons.length; i += 1) {
	if (buttons[i].hasAttribute("active")) {
		buttons[i].removeAttribute("active");
	}
	
}
if (ev.target.innerHTML === "active") {
	container.innerHTML = contents[0];
}
else if (ev.target.innerHTML === "wind") {
	container.innerHTML = contents[1];
}
else if (ev.target.innerHTML === "rain") {
	container.innerHTML = contents[2];
}
ev.target.setAttribute("id", "active");
}
/* 
End function handleClick. */
/* 
Loop through buttons array and 
register handleClick to listen for "click" event 
on any button from array buttons. */
for (k = 0; k < buttons.length; k += 1) {
	buttons[k].addEventListener("click", handleClick, false);
}

