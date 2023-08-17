const grid = document.querySelector('.grid');

for( let i = 0; i < 16; i++ ) {
    const rows = document.createElement('div');
    rows.style.display = 'flex';
    rows.style.flex = '1';
    rows.style.flexDirection = 'column';
    for (let j = 0; j < 16; j++) {
    const square = document.createElement('div');
    square.style.flex = '1';
    square.style.borderStyle = 'solid'
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'blue';
    })
        rows.appendChild(square);
    }
    grid.appendChild(rows)
}

