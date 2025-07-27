const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let painting = false;
let color = document.getElementById('colorPicker').value;
let brushSize = document.getElementById('brushSize').value;

// Start Drawing
canvas.addEventListener('mousedown', () => {
    painting = true;
    ctx.beginPath(); // Start a new path
});

// Stop Drawing
canvas.addEventListener('mouseup', () => {
    painting = false;
    ctx.closePath(); // End the path
});

// Drawing while mouse is moving
canvas.addEventListener('mousemove', draw);

function draw(e){
    if(!painting) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;

    const react = canvas.getBoundingClientRect();
    const x = e.clientX - react.left;
    const y = e.clientY - react.top;

    ctx.lineTo(x, y);
    ctx.stroke();
}

// Update color and brush size
document.getElementById('colorPicker').addEventListener('change', (e) => {
    color = e.target.value;
});

document.getElementById('brushSize').addEventListener('input', (e) => {
    brushSize = e.target.value;
});

// Clear Canvas
document.getElementById('clearBtn').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
});