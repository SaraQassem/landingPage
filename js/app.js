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
    navList = document.getElementById('navbar__list');

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

        //  add the class 'menu__link' to the nav link
        navLink.className = 'menu__link';

        //  append the nav link <a> to the list item <li>
        navItem.appendChild(navLink);

        //  append the list item <li> to the document fragment
        virtualDOM.appendChild(navItem);
    }

    //  after adding all the section names to the document fragment,
    //  append the fragment to the navbar list
    navList.appendChild(virtualDOM);
};


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNav();
// Scroll to section on link click

// Set sections as active


