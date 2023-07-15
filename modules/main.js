import { manualSliderWidth } from './variables.js';
import { getWinWidth, getWinHeight } from './get-window-dimensions.js';
import { createSlider } from './create-slider.js';
import { resizeSlider } from './resize-slider.js';

//Create slides
createSlider(
    getWinWidth(),
    getWinHeight()
);

//Set eventListener for browser widow resize
window.addEventListener('resize', () => {
    /*Set the slider width based on
    the current width of the window*/
    resizeSlider(
        getWinWidth(),
        getWinHeight()
    );
});