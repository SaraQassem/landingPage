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
 * Define Global Variables
 * 
*/

//  get the <main> element from the HTML
const main = document.getElementsByTagName('main')[0],

    //  get the navbar list from the HTML
    navList = document.getElementById('navbar__list'),

    //  get all the links in the navbar
    navLinks = navList.getElementsByClassName('menu__link');

let pageSections = [];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//  This functions gets all the section elements in the <main>,
//  then stores them into an array
let getSections = () => {

    //  get the sections from the DOM
    const sectionElements = main.getElementsByTagName('section');

    //  store the sections in the array
    for (let i = 0; i < sectionElements.length; i++) {

        pageSections.push(sectionElements.item(i));
    }
};

//  this function takes the current active section,
//  and adds the 'activeNavLink' class to it's related link in the navbar
let activateLink = (relatedSection) => {

    //  loop through all the navigation links,
    //  to find the link that anchors to the related section
    for (let navLink of navLinks) {

        // get the value of the 'href' attribute
        let navHref = navLink.getAttribute('href').replace('#', '');

        //  check if the value of the 'href' equals the one of the section's ID
        if (navHref === relatedSection.id) {

            //  remove the 'activeNavLink' from the last active link
            document.getElementsByClassName('activeNavLink')[0]
                .classList.remove('activeNavLink');

            //  add the class 'activeNavLink' to the current active link
            navLink.classList.add('activeNavLink');
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//  This function will dynamically create a navigation menu
//  based on the sections of the page
let buildNav = () => {

    //  get all the <section> elements from the HTML
    getSections();

    //  create a document fragment to append the nav links to it
    let virtualDOM = document.createDocumentFragment();

    //  loop through all the sections found in the page
    for (let section of pageSections) {

        //  create a list item element
        let navItem = document.createElement('li'),

            //  create a link element
            navLink = document.createElement('a');

        //  get the section name from the data-nav attribute
        //  and put it in the link text
        navLink.innerText = section.dataset.nav;

        //  add the 'href' attribute to anchor to the related section's ID
        navLink.setAttribute('href', `#${section.id}`);

        //  add the class 'menu__link' to the nav link
        navLink.className = 'menu__link';

        //  append the nav link <a> to the list item <li>
        navItem.appendChild(navLink);

        //  append the list item <li> to the document fragment
        virtualDOM.appendChild(navItem);
    }

    //  add the class 'activeNavLink' by default to the first link in the navbar
    virtualDOM.querySelector('a').classList.add('activeNavLink');

    //  after adding all the section names to the document fragment,
    //  append the fragment to the navbar list
    navList.appendChild(virtualDOM);
};


// Add class 'active' to section when near top of viewport
let activateSection = () => {

    //  loop through all the sections in the page
    for (let section of pageSections) {

        //  get the top offset of the section from the viewport
        let topOffset = section.getBoundingClientRect().y;

        //  if the offset is between 0 and 250, do the following:
        if (topOffset > 0 && topOffset < 250) {

            //  remove the 'activeSection' class from the last active section
            document.getElementsByClassName('activeSection')[0]
                .classList.remove('activeSection');

            //  add the 'activeSection' class to the current active section
            section.classList.add('activeSection');

            activateLink(section);

            break;
        }
    }
};


// Scroll to anchor ID using scrollTO event
let scrollToSection = (evt)=> {

    //  check if the clicked item is the navigation link
    if (evt.target.tagName === 'A') {

        //  remove the default click behaviour
        evt.preventDefault();

        //  get the section that the clicked link anchors to
        const relatedSection = document.getElementById(
            evt.target.getAttribute('href').replace('#', '')),

            //  get the top offset of the related section
            relatedSectionTopOffset = relatedSection.offsetTop;

        //  scroll the window smoothly to the calculated top offset
        window.scrollTo({

            top: relatedSectionTopOffset,

            behavior: 'smooth'
        });
    }
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNav();
// Scroll to section on link click
navList.addEventListener('click', scrollToSection);

// Set sections as active
window.addEventListener('scroll', activateSection);

