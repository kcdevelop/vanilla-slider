import { url, sliderFrame, sliderTrack, slides } from './variables.js';

//Set "slider-frame", "slider-track", and slide styles
export const setSliderStyles = (winWidth, winHeight) => {
    //Define handle for slide elements
    let addSlideStyles = document.querySelectorAll('.slider-track article');
    
    addSlideStyles.forEach((addStyle, i) => {
        //Set style rules for slide elements
        addStyle.style.cssText = `
            background-image: url("${url}${slides[i].image}");
            background-size: cover;
            width: ${winWidth}px; 
            height: ${winHeight}px; 
            float: left;
        `;
        
        //Set width and height style rules for "slider-frame" element
        sliderFrame.style.cssText = `
            width: ${winWidth}px; 
            height: ${winHeight}px;
        `;
        
        //Set "slider-track" width style rule based on total number of slides
        sliderTrack.style.width = `${slides.length * winWidth}px`;
    });
}