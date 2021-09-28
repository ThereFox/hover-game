const board = document.querySelector("#board");
const colors = ['red','slateblue','darkorchid', 'blue', 'greenyellow', 'green']
const squares_number = 484;

for (let i=0; i < squares_number;i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
}

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 15px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
        element.style.backgroundColor = '#1d1d1d';
        element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    /*
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`
    */
    return colors[Math.floor(Math.random() * colors.length)];
}