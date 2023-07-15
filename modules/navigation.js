import { getWinWidth } from './get-window-dimensions.js';
import { navigation, tabNav, manualSliderWidth } from './variables.js';
import { animateSlider } from './animate-slider.js';

//Clear tab selections
const clearTabHighlights = (navTabs) => {
    navTabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });
}

//Clear tab selections
const addTabHighlight = (navTabs, slideNum=0) => {
    //Initiate clearTabHighlights func
    clearTabHighlights(navTabs);

    //Add tab highlight
    navTabs[slideNum].classList.add('active-tab');
}

//Initiate navigation
export const initNavigation = () => {
    const tabNavTabs = tabNav.querySelectorAll('.tab-nav .tab');
    let slideCount = 0;

    //Highlight first tab on load
    addTabHighlight(tabNavTabs, 0);

    //Set eventListener for navigation arrows
    navigation.forEach(navArrow => {
        navArrow.addEventListener('click', (event) => {
            //Get the class name of the clicked navigation arrow
            let navArrowName = event.target.classList;
            
            //Track navigation slide count
            if(
                navArrowName.value === 'next' && 
                slideCount < (tabNavTabs.length - 1)
            ) {
                slideCount = slideCount + 1; 
            }

            if(
                navArrowName.value === 'back' && 
                slideCount !== 0
            ) {
                slideCount = slideCount - 1;
            }

            //Initiate update tab highlight
            addTabHighlight(tabNavTabs, slideCount);

            /*Initiate slider directional animation based
            on the current "navArrowName"*/
            animateSlider(
                navArrowName.value,
                null,
                getWinWidth(),
            );
        });
    });

    //Set eventListener for navigation tabs
    tabNavTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            //Get the class name of the clicked navigation tab
            let currentTab = event.target,
                navTabName = currentTab.classList[0],
                 navTabNum = currentTab.getAttribute('data-slide-number');

            //Initiate tab highlight func
            addTabHighlight(tabNavTabs, navTabNum);

            /*Initiate slider directional animation
            respective "navTabNum"*/
            animateSlider(
                navTabName,
                navTabNum,
                getWinWidth(),
            );
        });
    });
}