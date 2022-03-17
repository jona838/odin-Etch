const main = document.querySelector('.main')

for (let i = 0; i < 16; i ++) {
    const col = document.createElement('div')
    main.appendChild(col).className = 'col';
    for (let j = 0; j < 16; j++) {
        const row = document.createElement('div')
        col.appendChild(row).className = 'row';
    }
}
const row = document.querySelectorAll('.row')

row.forEach(row => {
    row.addEventListener('mouseover', () => {
        row.style = 'background-color: black;'
    })
});
