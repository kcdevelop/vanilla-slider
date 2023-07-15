//Get current window "innerWidth"
export const getWinWidth = (manualWidth) => manualWidth != null ? manualWidth : window.innerWidth;

//Get current window "innerHeight" and set at 25 percent
export const getWinHeight = () => Math.round(getWinWidth() * .55);