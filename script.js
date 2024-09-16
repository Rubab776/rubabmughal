// Array of colors to choose from
const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A6FF33', '#33A6FF', 
    '#FFCC33', '#CCFF33', '#33FFCC', '#CC33FF', '#FF6633', '#66FF33', 
    '#FF3366', '#33FF66', '#66CCFF', '#FF99CC', '#99FF99', '#CCFF99',
    '#FF6699', '#66FF99', '#99CCFF', '#CC6699', '#FF9966', '#66FF66',
    '#FF3366', '#33FF99', '#9966FF', '#FFCC66', '#66FFCC', '#CCFF66',
    '#66CC99', '#CC6699', '#FF66CC', '#66FF66', '#CCFF33', '#FF9933',
    '#33FFCC', '#CCFF33', '#FF6633', '#66FFCC', '#CC66FF', '#99CCFF',
    '#FF9999', '#66CCFF', '#CC99FF', '#99FF66', '#FFCC99', '#33CCFF',
    '#CCFFCC', '#FF66FF', '#66CCFF', '#FF6666', '#66FF99', '#CCFF99'
];

function changeColor() {
    // Generate a random index to select a color
    const randomIndex = Math.floor(Math.random() * colors.length);
    // Apply the selected color as the background color of the body
    document.body.style.backgroundColor = colors[randomIndex];
}

// Change color on space press or touch event
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.addEventListener('touchstart', function() {
    changeColor();
});
