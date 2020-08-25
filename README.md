# Landing Page Project
This project contains a simple dynamic landing page with an auto-filled navigation bar.

## Table of Contents

* [Main Functions](#Main Functions)
* [Helper Functions](#Helper Functions)
* [Resources](#Resources)
* [Live Preview](#Live Preview)

## Main Functions

1. **`buildNav()`**\
This function dynamically creates a navigation menu based on the sections of the page.

2. **`scrollToSection()`**\
This function scrolls to the selected section from the navigation menu.

3. **`windowScrollEventListeners()`**\
This function contains all the listeners for the 'scroll' event of the window object.

## Helper Functions

1. **`getSections()`**\
This functions gets all the section elements in the `<main>`, then stores them into an array.

2. **`activateLink()`**\
This function takes the current active section, and adds the `activeNavLink` class to it's related link in the navbar.

3. **`activateSection()`**\
This function adds the class `active` to the nearest to the top of viewport.

4. **`showBackToTopButton()`**\
This function displays the Back to Top button when the user scrolls down.

5. **`showHeader()`**\
This function removes the `hideHeader` class to display the header.

6. **`hideHeader()`**\
This function adds the `hideHeader` class to the header to hide it.

7. **`toggleHeaderScroll()`**\
This function toggles the display of the header while scrolling.

8. **`scrollToTopSmoothly()`**\
This function scrolls the window smoothly to the given top offset.

## Resources
* [Stop Scroll Timeout](https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/)
* [HTML Collection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
* [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
* [Window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)

## Live Preview
You can watch the live preview of this site [here](https://hopeful-kalam-b57e66.netlify.app/).