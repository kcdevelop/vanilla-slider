import { getWinWidth } from './get-window-dimensions.js';

//Set handles for slider elements
export const navigation = document.querySelectorAll('nav > i'),
                     sliderFrame = document.querySelector('#slider-frame'),
                     sliderTrack = sliderFrame.querySelector('.slider-track'),
                     tabNav = sliderFrame.querySelector('.tab-nav');

//Current URL
export const url = window.location.href;

//Slide element array
export const slides = [
    { 'name': 'slide1', 'image': 'images/custom-family-home-in-athens-1.jpg' },
    { 'name': 'slide2', 'image': 'images/custom-family-home-in-athens-2.jpg' },
    { 'name': 'slide3', 'image': 'images/custom-family-home-in-athens-3.jpg' },
    { 'name': 'slide4', 'image': 'images/custom-family-home-in-athens-4.jpg' },
    { 'name': 'slide5', 'image': 'images/custom-family-home-in-athens-5.jpg' }
];

//Default slider properties
export var sliderProps = {
    float: 'left',
    count: slides.length - 1
};

//Default state properties
export var navCalc = {
        trackWidth: getWinWidth() * sliderProps.count,
        trackPos: 0,
        slideCount: 0
};