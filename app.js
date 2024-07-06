let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let body = document.querySelector("body");
let para = document.querySelectorAll("p");
let modeBtn = document.querySelector("#mode-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let playerX = prompt("player 1 Name");
let playerO = prompt("player 2 Name");
let totolGame = 1;
let xWin = 0;
let oWin = 0;



let count = 0;

let turnO = true; //PlayerX, PlayerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turnO == true) {
            turnO = false;
            box.innerText = "X";
            box.classList.add("o");
            box.classList.remove("x");
            count++;
        }
        else {
            turnO = true;
            box.innerText = "O";
            box.classList.add("x");
            box.classList.remove("o");
            count++;
            console.log(count);
        }
        box.disabled = true;
        checkWinner();
    });

});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(boxes[pattern[0]].innerText);
        // console.log(boxes[pattern[1]].innerText);
        // console.log(boxes[pattern[2]].innerText);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log("Winner", pos1val);
                // showWinner(pos1val);

                if (pos1val === "X") {
                    ++xWin;
                    showWinner(playerX, xWin);

                }
                else {
                    ++oWin;
                    showWinner(playerO, oWin);

                }

            }
            if (count === 9) {
                draw();
            }
        }
        // if (pos1val != "" && pos2val != "" && pos3val != "") {
        // if (pos1val !== pos2val && pos2val !== pos3val){
        //      console.log("Winner not decleard");   
        // }}

    }
}

const showWinner = (winner, win) => {
    if (winner === playerX) {
        msg.innerText = `Congratulations, Winner is ${winner} \n Score \n Total Game: ${totolGame} \n ${playerX}: ${win} \n ${playerO}: ${oWin}`;
    }
    else {
        msg.innerText = `Congratulations, Winner is ${winner} \n Score \n Total Game: ${totolGame} \n ${playerX}: ${xWin} \n ${playerO}: ${win}`;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();


}
const draw = () => {
    msg.innerText = "Draw";
    msgContainer.classList.remove("hide");
    count = 0;
}

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;

    }
};
const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
    totolGame++;
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



// Dark mode 
let currMode = "light";
modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        body.classList.add("dark");
        body.classList.remove("light");
        msg.style.color = "#0471A6";
        modeBtn.innerHTML = "Light Mode";
        currMode = "dark";
    }
    else {
        body.classList.add("light");
        body.classList.remove("dark");
        msg.style.color = "#061826";
        currMode = "light";
        modeBtn.innerHTML = "Dark Mode";
    }
})
