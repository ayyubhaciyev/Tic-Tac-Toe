const n = 3;
let M = [];
const X = 'X';
const O = 'O';
let count = 1;
onload = ()=>{
    createArr();
    createTable();
};

const createArr = ()=>{
    for(let i = 0; i < n; i++){
        M[i] = [];
        for(let j = 0; j < n; j++){
            M[i][j] = '';
        }
    }
}

const createTable = () => {
    let view = '';

    for(let i = 0; i < n; i++){
        view += `<tr>`;
        for(let j = 0; j < n; j++){
            view += `<td onclick="clickCkeck(${i},${j})">${M[i][j]}</td>`;
        }
        view += `</tr>`;
    }
    document.getElementsByTagName("table")[0].innerHTML = view;
};

const clickCkeck = (i,j)=>{
    if(M[i][j] ===""){
        if(count % 2 !== 0){
            M[i][j] = X;
            count++;
            randomAdd();
        }else{
            M[i][j] = O;
            count++;
        }
        
        createTable();
        setTimeout(checkWin,250);
    }
    
};

const checkWin = ()=>{
    if(M[0][0] === M[1][1] && M[1][1] === M[2][2] && M[0][0] !==''){
        alert(`${M[0][0]} Win!`);
        location.reload();
    }
    else if(M[0][2] === M[1][1] && M[1][1] === M[2][0] && M[0][2] !==''){
        alert(`${M[0][2]} Win!`);
        location.reload();
    }
    for(let i = 0; i < n; i++){
        if(M[i][0]===M[i][1] && M[i][1]===M[i][2] && M[i][0]!==''){
            alert(`${M[i][0]} Win!`);
            location.reload();
        }
        if(M[0][i]===M[1][i] && M[1][i]===M[2][i] && M[0][i] !== ''){
            alert(`${M[0][i]} Win!`);
            location.reload();
        }
    }
    let countWin = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(M[i][j] !==''){
                countWin++;
            }
        }
    }
    if(countWin===n*n){
        alert(`X=O`);
        location.reload();
    }
}

const randomAdd = ()=>{
    const i = Math.floor(Math.random() * n);
    const j = Math.floor(Math.random() * n);
    if(M[i][j]===""){
        clickCkeck(i,j);
    }else{
        randomAdd();
    }
};