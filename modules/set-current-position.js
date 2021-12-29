import { sliderTrack, sliderProps, navCalc } from './variables.js';

//Set current width and position of "slider-track" on resize
export const setCurrentPosition = (winWidth) => {
    //Calculate the total track width and set "trackWidth" property
    navCalc.trackWidth = winWidth * sliderProps.count;

    /*Calculate the track position based on the current
    slide number and set "trackPos" property*/
    navCalc.trackPos = winWidth * navCalc.slideCount;

    //Set "slider-track" position instantly (without slide animation)
    sliderTrack.style.transitionDuration = '0ms';
    sliderTrack.style.transform = `translate(-${navCalc.trackPos}px, 0px)`;
}