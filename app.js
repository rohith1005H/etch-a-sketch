document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('#container');
    const btn = document.querySelector('#btn');
    const size = document.querySelector('#size');

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createGrid(num) {
        container.innerHTML = '';
        for (let i = 0; i < num * num; i++) {
            const cell = document.createElement('div');
            cell.innerText = (i+1);
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = getRandomColor();
            });
            cell.addEventListener('mouseleave', () => {
                cell.style.backgroundColor = '#ffffff';
            });
            cell.classList.add('cell');
            container.appendChild(cell);
        }

        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }

    createGrid(Number(size.value))

    btn.addEventListener('click', () => {
        const num = Number(size.value);
        if (isNaN(num) || num < 1 || num > 50) {
            num = 16;
        }
        createGrid(num);
    });
});

