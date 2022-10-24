/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//building array of sections
const sections= Array.from(document.querySelectorAll('section'));
const main= document.getElementsByTagName("main");
const navList= document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//add section item to nav bar list
//build list of setions.
function addNavList(){
    for(section of sections){
        let secId=section.getAttribute('id');
        let secName=section.getAttribute('data-nav');
        let newLi=document.createElement("li");
        //creates anchor to reach every section.
        newLi.innerHTML=`<a class="menu__link" data-id=${secId} data-nav="${secName}" href="#${secId}">${secName}</a>`
        navList.appendChild(newLi);
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//add class active when 70% of section is on viewport.
const observer= new IntersectionObserver(enterys=>{
    enterys.forEach(entery => {
        entery.target.classList.toggle("active",entery.isIntersecting);
        //seclect the anchor tag related to wanted section using data-nav value.
        const data=entery.target.dataset.nav
        const anchor=navList.querySelector(`[data-nav=${CSS.escape(data)}]`);
        //add "active" class to nav anchor when related section is in wiewport. 
        anchor.classList.toggle("active",entery.isIntersecting);
    });

},
{
    threshold:0.7
});

//loop over sections and send every section to observer.
sections.forEach(section => {
    observer.observe(section)
});

/* TODO:prevent default action of the anchor and scroll to the related section when clicking on nav-link using javascript scrollIntoView.*/
navList.addEventListener("click", (event) => {
    //prevent the default action of the anchor tag.
    event.preventDefault();
    link=event.target.dataset.id
    let ele=document.querySelector(`#${link}`)
    ele.scrollIntoView({behavior:"smooth"});
});

// build the nav
addNavList();

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 

// Scroll to section on link click

// Set sections as active


