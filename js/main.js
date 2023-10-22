import { calculate } from "./functions.js";

/* Theme button */

const theme_button = document.getElementById('theme-button');


theme_button.addEventListener('click', () => {
    if(theme_button.innerText == 'LIGHT'){
        theme_button.innerText = 'Dark';
        document.body.classList.add('bg-dark');
    } else {
        theme_button.innerText = 'light';
        document.body.classList.remove('bg-dark');
    }
});

const pascalTriangle = (numRows) => {
    let triangle = [[1], [1, 1]];

    if (numRows === 0) {
        return [];
    } else if (numRows == 1) {
        return [[1]];
    } else if (numRows == 2) {
        return [[1], [1, 1]];
    } else {
        for (let row = 2; row < numRows; row++) {
            addRow(triangle);
        }
    }
    return triangle;
}

const addRow = (triangle) => {
    let prevRow = triangle[triangle.length - 1];
    let newRow = [1];

    for (let i = 0; i < prevRow.length - 1; i++) {
        let nextNum = prevRow[i] + prevRow[i + 1];
        newRow.push(nextNum);
    }
    newRow.push(1);
    return triangle.push(newRow);
}



const div_pascal = document.getElementById('pascal-triangle');

let triangle = pascalTriangle(8);

triangle.map((element) => { 
    element.map((sub_element) => {
        let element_dom = document.createElement('p');
        element_dom.innerText = sub_element;
        element_dom.classList.add('text-triangle')
        div_pascal.appendChild(element_dom)
    })
    
})

console.log(triangle);

function generatePascalTriangle(n) {
    let triangle = [];
    for(let i = 0; i < n; i++) {
        triangle[i] = new Array(i+1);
        for(let j = 0; j < i+1; j++) {
            if(j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
            let p = document.createElement('p');
            p.textContent = triangle[i][j];
            p.style.border = '2px solid #000';
            p.style.shapeOutside = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
            p.style.width = '60px';
            p.style.height = '60px';
            document.body.appendChild(p);
        }
    }
    return triangle;
}

generatePascalTriangle(6);