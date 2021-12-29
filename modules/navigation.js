import { getWinWidth } from './get-window-dimensions.js';
import { navigation, tabNav } from './variables.js';
import { animateSlider } from './animate-slider.js';

//Initiate navigation
export const initNavigation = () => {
    const tabNavTabs = tabNav.querySelectorAll('.tab-nav .tab');
 
    //Set eventListener for navigation arrows
    navigation.forEach(navArrow => {
        navArrow.addEventListener('click', (event) => {
            //Get the class name of the clicked navigation arrow
            let navArrowName = event.target.classList;

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
            let navTabName = event.target.classList[0],
                 navTabNum = event.target.getAttribute('data-slide-number');

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