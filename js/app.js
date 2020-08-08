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
const main = document.getElementsByTagName('main')[0];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//  This functions gets all the section elements in the <main>,
//  then stores them into an array
let getSections = () => {

    //  create an empty array to store the page sections
    let sectionsArr = [];

    //  get the sections from the DOM
    const sectionElements = main.getElementsByTagName('section');

    //  store the sections in the array
    for (let i = 0; i < sectionElements.length; i++) {

        sectionsArr.push(sectionElements.item(i));
    }

    return sectionsArr;
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

// Scroll to section on link click

// Set sections as active


