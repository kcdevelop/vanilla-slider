import { sliderTrack, navCalc } from './variables.js';

//Animate slider (directionally)
export const animateSlider = (direction, tabNum, winWidth) => {
    console.log(direction);
    /*Move the track position forward if the "next" nav arrow 
    is clicked and increase "slideCount"*/
    if(
        direction == 'next' && 
        navCalc.trackPos != navCalc.trackWidth
    ) {
        navCalc.trackPos += winWidth;
        navCalc.slideCount++;
    }

    /*Move the track position back if the "back" nav arrow 
    is clicked and decrease "slideCount"*/
    if(
        direction == 'back' && 
        navCalc.trackPos != 0
    ) {
        navCalc.trackPos -= winWidth;
        navCalc.slideCount--;
    }

    /*Move the track position to the respective slide 
    based on clicked tab nav, set current "slideCount"*/
    if(
        direction == 'tab' && 
        tabNum != null
    ) {
        navCalc.trackPos = (winWidth * tabNum);
        navCalc.slideCount = tabNum;
    }

     //Set "slider-track" position (with slide animation)
    sliderTrack.style.transitionDuration = '800ms';
    sliderTrack.style.transform = `translate(-${navCalc.trackPos}px, 0px)`;
}