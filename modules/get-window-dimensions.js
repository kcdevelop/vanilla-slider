//Get current window "innerWidth"
export const getWinWidth = (manualWidth) => {
    return manualWidth ? manualWidth : window.innerWidth;
}

//Get current window "innerHeight" and set at 55 percent
export const getWinHeight = () => {
    return Math.round(getWinWidth() * .55);
}