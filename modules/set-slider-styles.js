import { url, sliderFrame, sliderTrack, slides } from './variables.js';

//Set "slider-frame", "slider-track", and slide styles
export const setSliderStyles = (winWidth, winHeight) => {
    //Define handle for slide elements
    let addSlideStyles = document.querySelectorAll('.slider-track figure');

    addSlideStyles.forEach((addStyle, i) => {
        let slideImg = addStyle.querySelector('img');
            
        slideImg.src = `${slides[i].image}`;
        
        //Set style rules for slide elements
        addStyle.style.cssText = `
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