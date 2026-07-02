let box = document.querySelectorAll(".box");
let displayWinner = document.querySelector("#hide");
let container = document.querySelector(".container");
let newGameBtn = document.querySelector(".newgame");
let restartGameBtn = document.querySelector(".restartgame");
let o = document.querySelector(".O");
let x = document.querySelector(".X");
let turnO = true;
let OScore = 0;
let XScore = 0;
box.forEach((b) => {
    b.addEventListener("click", () => {
        if (b.innerText != "") return;
        if (turnO) {
            b.innerText = "O";
            turnO = false;
        }
        else {
            b.innerText = "X";
            turnO = true;
        }
        CheckWinner();  // Only check AFTER a move is made



    });
});
let patterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const CheckWinner = () => {
    for (let pattern of patterns) {
        let posval0 = box[pattern[0]].innerText;
        let posvall = box[pattern[1]].innerText;
        let posval2 = box[pattern[2]].innerText;
        if (posval0 !== "" && posvall !== "" && posval2 !== "") {
            if (posval0 === posvall && posvall === posval2) {
                let winner = posval0;
                ShowWinner(winner);
                disablebox();
                // return true;
            }
            else {
                checkDraw();
            }

        }
    }
    return false;
};

const checkDraw = () => {
    // Check if all boxes are filled without a winner
    let isBoardFull = Array.from(box).every(b => b.innerText !== "");
    if (isBoardFull) {
        displayWinner.style.display = "block";
        displayWinner.innerText = "It's a Draw!";
        displayWinner.style.color = "#ff0000"; // Set color to red for draw
    }
};
const ShowWinner = (winner) => {
    displayWinner.style.display = "block";
    displayWinner.innerText = `Player ${winner} wins!`;
    if (winner === "O") {
        console.log(winner);
        o.innerText = ++OScore;
    }
    else {
        x.innerText = ++XScore;
    }

};
const disablebox = () => {
    for (let b of box) {
        b.disabled = true;
    }
};
newGameBtn.addEventListener("click", () => {
    box.forEach((b) => {
        b.innerHTML = "";
        b.disabled = false;
    });
    o.innerText = "0";
    x.innerText = "0";
    displayWinner.style.display = "none";
    OScore = 0;
    XScore = 0;
});
restartGameBtn.addEventListener("click", () => {
    box.forEach((b) => {
        b.innerHTML = "";
        displayWinner.style.display = "none";
        b.disabled = false;
    });
});







