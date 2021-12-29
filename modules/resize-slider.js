import { setSliderStyles } from './set-slider-styles.js';
import { setCurrentPosition } from './set-current-position.js';

//Handle window resize event
export const resizeSlider = (winWidth, winHeight) => {
    //Update slider width and height styles
    setSliderStyles(winWidth, winHeight);

    //Update current width and position of "slider-track"
    setCurrentPosition(winWidth);
}