import {sliderTrack, slides, tabNav } from './variables.js';
import { setSliderStyles } from './set-slider-styles.js';
import { initNavigation } from './navigation.js';

//Create slides from "slides" array
export const createSlider = (winWidth, winHeight) =>     {
    slides.forEach((slide, i) => {
        //Create each slide element
        let newSlideElm = document.createElement('article'),
             navTabElm  = document.createElement('i');

        /*Set default and unique class names: unique class
        names defined in slide object within the "slides" array*/
        newSlideElm.classList.add('slide', slide.name);
        navTabElm.classList.add('tab', slide.name);

        //Set the "data-slide-number" attribute
        navTabElm.setAttribute('data-slide-number', i);
        
        //Append each "slide" to the "slide-track"
        sliderTrack.append(newSlideElm);

        //Append navigation tabs to "navTabs"
        tabNav.append(navTabElm);
    });

    //Set slider styles
    setSliderStyles(winWidth, winHeight);

    /*Initialize navigation after all slider 
    elements have been created*/
    initNavigation();   
}