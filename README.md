# Project Title 
- ## landing-page
# Demo-Preview
![demo](https://media.giphy.com/media/a0llvVoFnEThU1g0wf/giphy.gif)
# Table of contents 
* [Project Title](#project-title)
* [Demo Preview](#demo-preview)
* [Development](#development)
* [Sponsor](#sponsor)
* [License](#license)
* [Contribute](#contribute)
# Development
* first creating 4th section in html file 
```html
<section id="section4" data-nav="Section 4">
      <div class="landing__container">
        <h2>Section 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>
```
* Then add the  nav-bar list corresponding to the number of sections with javascript  code below :
```javascript
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

```
* with reactive nav-bar and section-background. 
```javascript
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
```
* Smooth scrolling using scrollIntoView.
```javascript
navList.addEventListener("click", (event) => {
    //prevent the default action of the anchor tag.
    event.preventDefault();
    link=event.target.dataset.id
    let ele=document.querySelector(`#${link}`)
    ele.scrollIntoView({behavior:"smooth"});
});
```
# Sponsor 
* [udacity](https://www.udacity.com/)
* [fwd](https://egfwd.com/)
# License 
* [udacity](https://www.udacity.com/)
# Contribute 
* [My Facebook](https://www.facebook.com/ayman.yasser.39/)
* [My Github](https://github.com/AymanYasser242)