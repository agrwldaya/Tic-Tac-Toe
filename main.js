let boxes = document.querySelectorAll(".box");
let newtbtn = document.querySelector(".newbtn");
let resetbtn = document.querySelector(".reset");
let winnermsg = document.querySelector("#message");
let turn = true;
const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
];
let sum = 0;

const checkwinnner = () => {
    for (let pattern of winningpattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                winnermsg.innerText = `Congratulation! Winner is ${val1}`;
                boxes[pattern[0]].style.backgroundColor = "#6a994e";
                boxes[pattern[1]].style.backgroundColor = "#6a994e";
                boxes[pattern[2]].style.backgroundColor = "#6a994e";
                for (let box of boxes) {
                    box.disabled = true;
                }
            }
        }
    }
};

let x = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        turn = true;
        winnermsg.innerText = "";
        box.style.backgroundColor = "#ffffc7";
        sum = 0;
    }
};

newtbtn.addEventListener("click", x);
resetbtn.addEventListener("click", x);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "X";
            turn = false;
        } else {
            box.innerText = "0";
            turn = true;
        }
        box.disabled = true;
        sum++;
        checkwinnner(box);

        if (sum === 9 && winnermsg.innerText === "") {
            console.log("Tie");
            winnermsg.innerText = `Tie`;
        }
    });
});
