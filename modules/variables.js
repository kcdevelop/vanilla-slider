import { getWinWidth } from './get-window-dimensions.js';

//Set handles for slider elements
export const navigation = document.querySelectorAll('nav > i'),
sliderFrame = document.querySelector('#slider-frame'),
sliderTrack = sliderFrame.querySelector('.slider-track'),
tabNav = sliderFrame.querySelector('.tab-nav'),
manualSliderWidth = sliderFrame.parentElement.clientWidth;

//Current URL
export const url = window.location.href;

//Slide element array
export const slides = [
    { 'name': 'slide1', 'image': 'images/custom-family-home-in-athens-1.jpg', 'caption': 'We found a great space on Placeholder that we couldn’t have accessed without signing a multi-year lease.' },
    { 'name': 'slide2', 'image': 'images/custom-family-home-in-athens-2.jpg', 'caption': 'We appreciated the platform and we already know that we will find our next rental on Placeholder.' },
    { 'name': 'slide3', 'image': 'images/custom-family-home-in-athens-3.jpg', 'caption': 'We were able to secure a new space within weeks on flexible lease terms and at a lower rate than what I found on any other platform. I would definitely use Placeholder in the future.' },
    { 'name': 'slide4', 'image': 'images/custom-family-home-in-athens-4.jpg', 'caption': 'We needed a hassle-free way of finding someone to fill our unused space and PlaceHolder was exactly what we needed. The whole process went really smoothly.' },
    { 'name': 'slide5', 'image': 'images/custom-family-home-in-athens-5.jpg', 'caption': 'Finding and moving into a new warehouse with Placeholder was fun. The added value for us has been the ongoing support after signing our rental and keeping in touch to make sure things are going well throughout our term.' }
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