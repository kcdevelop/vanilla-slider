import {sliderTrack, slides, tabNav } from './variables.js';
import { setSliderStyles } from './set-slider-styles.js';
import { initNavigation } from './navigation.js';

//Create slides from "slides" array
export const createSlider = (winWidth, winHeight) =>     {
    slides.forEach((slide, i) => {
        //Create each slide element
        let newSlideElm = document.createElement('figure'),
            newSlideImg = document.createElement('img'),
            navTabElm  = document.createElement('i');

        /*Set default and unique class names: unique class
        names defined in slide object within the "slides" array*/
        newSlideElm.classList.add('slide', slide.name);
        newSlideImg.classList.add('slide-img');
        navTabElm.classList.add('tab', slide.name);
        
        //Set the image "data-slide-name" attribute
        newSlideImg.setAttribute('data-slide-name', slide.name);
        
        //Append each "slide img" to the "slide element"
        newSlideElm.append(newSlideImg);
        
        //Create and append caption/text if exists
        if(
            slide.caption &&
            slide.caption !== ''
        ) {
            let newSlideCaption = document.createElement('caption'),
            newSlideCaptionTxt = document.createTextNode(slide.caption);
            
            newSlideCaption.classList.add('slide-caption');
            newSlideCaption.append(newSlideCaptionTxt);
            newSlideElm.append(newSlideCaption);
        }
        
        //Set the slide element "data-slide-number" attribute
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