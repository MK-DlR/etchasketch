# etchasketch
odin project etch-a-sketch project 

PROJECT
1. create a webpage with a 16x16 grid of square divs
    a. create the divs using JavaScript
    b. put grid squares inside a “container” div (div can be written into HTML file)
    c. use Flexbox to make divs appear as a grid (versus just one on each line)
    d. be careful with borders and margins - they can adjust the size of the squares
    e. "why isn’t my grid being created?"
        e1. is the css stylesheet linked? (yes)
        e2. open browser devtools
            - check if any errors in JS console
            - check "elements" panel to see if elements are there but somehow hidden
            - add `console.log` statements in JS

2. set up a “hover” effect 
    a. so that the grid divs change color 
        a1. when your mouse passes over them
            - “hovering” is what happens when your mouse enters a div and ends when your mouse leaves it - you can set up event listeners for either of those events as a starting point
        a2. leaving a (pixelated) trail through your grid like a pen would
            - there are multiple ways to change the color of the divs, including: 
                - adding a new class to the div
                - changing the div’s background color using JS
        
3. add a button on the top of the screen 
    a. that will send the user a popup asking for the number of squares per side for the new grid
        a1. once entered, the existing grid should be removed
        a2. a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad
        a3. set the limit for the user input to a maximum of 100
    b. research `button` tags in HTML 
        b1. and how you can make a JS function run when one is clicked
        b2. also check out `prompts`
    c. you should be able to enter `64` and have a brand new 64x64 grid pop up without changing the total amount of pixels used

EXTRA CREDIT
1. rather than squares being the same color throughout the grid
    a. randomize the squares’ RGB values with each interaction
2. implement a progressive darkening effect 
    a. where each interaction darkens the square by 10%
        a1. goal is to achieve a fully black (or completely colored) square
        a2. in only ten interactions
        a3. see mdn docs article about css opacity property: https://developer.mozilla.org/en-US/docs/Web/CSS/opacity