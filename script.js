let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let winMsg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let playerX = true;

let count = 0;

const pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerX) {
            box.innerText = "X"
            playerX = false;
            count++;
        } else {
            box.innerText = "O"
            playerX = true;
            count++;
        }

        box.disabled = true;
        cheakWinner();
    })
})

const resetGame = () => {
    playerX = true;
    boxEnable();
    msgContainer.classList.add("hide");
}

const boxEnable = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}

const boxDisable = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const winner = (win) => {
    winMsg.innerText = `${win} Wins`;
    msgContainer.classList.remove("hide");
    boxDisable();
}

const cheakWinner = () => {
    for (let winPattern of pattern) {
        let box1 = boxes[winPattern[0]].innerText;
        let box2 = boxes[winPattern[1]].innerText;
        let box3 = boxes[winPattern[2]].innerText;

        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 === box2 && box2 === box3) {
                winner(box1);
            }
            else if (count == 9) {
                winMsg.innerText = `DRAW`;
                msgContainer.classList.remove("hide");
            }
        }
    }
}

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);