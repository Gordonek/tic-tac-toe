let player = 0;
let clicked = 0;
let secondQueue = 0;
let winsX = 0;
let winsO = 0;
let win = 0;
let x = document.querySelectorAll(".x");
let o = document.querySelectorAll(".o");
let scoreX = document.querySelector(".red p");
let scoreO = document.querySelector(".blue p");
let playerX = document.getElementById("player-x");
let playerO = document.getElementById("player-o");
let square = document.querySelectorAll(".box");
let lines = document.querySelectorAll(".line");
let wins = [
    [0,1,2], [3,4,5],
    [6,7,8], [0,3,6],
    [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];
function checkWin(){
    for(let i=0;i<wins.length;i++){
        if((!(x[wins[i][0]].classList.contains('invisible')))
        && (!(x[wins[i][1]].classList.contains('invisible')))
        && (!(x[wins[i][2]].classList.contains('invisible')))){
            win=1;
            winsX+=1;
            for(let j=0;j<9;j++){
                square[j].style.cursor = "auto";
            }
            setTimeout(() => {
                x[wins[i][0]].style.animation = "pulse 0.4s ease-in-out 0s 2 normal both";
                x[wins[i][1]].style.animation = "pulse 0.4s ease-in-out 0s 2 normal both";
                x[wins[i][2]].style.animation = "pulse 0.4s ease-in-out 0s 2 normal both";
            }, 200);
            setTimeout(() => {
                x[wins[i][0]].style.animation = "";
                x[wins[i][1]].style.animation = "";
                x[wins[i][2]].style.animation = "";
            }, 1000);
            setTimeout(() => {
                winnerAnimation(i);
            }, 800);
            setTimeout(() => {
                resetBoard();
                scoreX.innerText = winsX;
                scoreX.style.animation = "textPulse 0.5s ease-in-out"
                setTimeout(() => {
                    scoreX.style.animation = ""
                }, 500);
            }, 2000+1100);
        }
        else if((!(o[wins[i][0]].classList.contains('invisible')))
        && (!(o[wins[i][1]].classList.contains('invisible')))
        && (!(o[wins[i][2]].classList.contains('invisible')))){
            win=1;
            winsO+=1;
            for(let j=0;j<9;j++){
                square[j].style.cursor = "auto";
            }
            setTimeout(() => {
                o[wins[i][0]].style.animation = "pulse 0.4s ease-in-out 0s 2 normal both";
                o[wins[i][1]].style.animation = "pulse 0.4s ease-in-out 0s 2 normal both";
                o[wins[i][2]].style.animation = "pulse 0.4s ease-in-out 0s 2 normal both";
            }, 200);
            setTimeout(() => {
                o[wins[i][0]].style.animation = "";
                o[wins[i][1]].style.animation = "";
                o[wins[i][2]].style.animation = "";
            }, 1000);
            setTimeout(() => {
                winnerAnimation(i);
            }, 800);
            setTimeout(() => {
                resetBoard();
                scoreO.innerText = winsO;
                scoreO.style.animation = "textPulse 0.5s ease-in-out"
                setTimeout(() => {
                    scoreO.style.animation = ""
                }, 500);
            }, 2000+1100);
        }
    }
}
function winnerAnimation(number){
    switch(number){
        case 0:
            lines[0].style.animation = "lineX 2s ease-in-out";
            setTimeout(() => {
                lines[0].style.animation = ""
            }, 2000);
            break;
        case 1:
            lines[1].style.animation = "lineX 2s ease-in-out";
            setTimeout(() => {
                lines[1].style.animation = ""
            }, 2000);
            break; 
        case 2:
            lines[2].style.animation = "lineX 2s ease-in-out";
            setTimeout(() => {
                lines[2].style.animation = ""
            }, 2000);
            break;
        case 3:
            lines[3].style.animation = "lineY 2s ease-in-out";
            setTimeout(() => {
                lines[3].style.animation = ""
            }, 2000);
            break;
        case 4:
            lines[4].style.animation = "lineY 2s ease-in-out";
            setTimeout(() => {
                lines[4].style.animation = ""
            }, 2000);
            break;
        case 5:
            lines[5].style.animation = "lineY 2s ease-in-out";
            setTimeout(() => {
                lines[5].style.animation = ""
            }, 2000);
            break;
        case 6:
            lines[6].style.animation = "lineZ 2s ease-in-out";
            setTimeout(() => {
                lines[6].style.animation = ""
            }, 2000);
            break;
        case 7:
            lines[7].style.animation = "lineZ2 2s ease-in-out";
            setTimeout(() => {
                lines[7].style.animation = ""
            }, 2000);
            break;
    }
}
function game(box){
    if(win==0){
        if(player==0){
            if(x[box].classList.contains("invisible") && o[box].classList.contains("invisible")){
                o[box].classList.remove('invisible');
                clicked+=1;
                player=1;
                playerX.classList.remove("invisible");
                playerO.classList.add("invisible");
                playerX.style.animation = "queuePulse 0.3s ease-in-out"
                setTimeout(() => {
                    scoreX.style.animation = ""
                }, 300);
                checkWin();
                if(clicked==9 && win==0){
                    for(let i=0;i<o.length;i++){
                        setTimeout(() => {
                            o[i].style.animation = "pulse 0.4s ease-in-out 0s 2 normal both";
                            x[i].style.animation = "pulse 0.4s ease-in-out 0s 2 normal both";
                        }, 200);
                        setTimeout(() => {
                            o[i].style.animation = "";
                            x[i].style.animation = "";
                        }, 1000);
                    }
                    setTimeout(resetBoard,1200);
                }
            }
            else if(!(x[box].classList.contains("invisible"))){
                x[box].style.animation = "pulse 0.3s ease-in-out"
                setTimeout(() => {
                    x[box].style.animation = ""
                }, 300);
            }
            else if(!(o[box].classList.contains("invisible"))){
                o[box].style.animation = "pulse 0.3s ease-in-out"
                setTimeout(() => {
                    o[box].style.animation = ""
                }, 300);
            }
        }
        else if(player==1){
            if(x[box].classList.contains("invisible") && o[box].classList.contains("invisible")){
                x[box].classList.remove('invisible');
                clicked+=1;
                player=0;
                playerO.classList.remove("invisible");
                playerX.classList.add("invisible");
                playerO.style.animation = "queuePulse 0.3s ease-in-out"
                setTimeout(() => {
                    scoreO.style.animation = ""
                }, 300);
                checkWin();
                if(clicked==9 && win==0){
                    for(let i=0;i<x.length;i++){
                        setTimeout(() => {
                            x[i].style.animation = "pulse 0.4s ease-in-out 0s 2 normal both";
                            o[i].style.animation = "pulse 0.4s ease-in-out 0s 2 normal both";
                        }, 200);
                        setTimeout(() => {
                            o[i].style.animation = "";
                            x[i].style.animation = "";
                        }, 1000);
                    }
                    setTimeout(resetBoard,1200);
                }
            }
            else if(!(x[box].classList.contains("invisible"))){
                x[box].style.animation = "pulse 0.3s ease-in-out"
                setTimeout(() => {
                    x[box].style.animation = ""
                }, 300);
            }
            else if(!(o[box].classList.contains("invisible"))){
                o[box].style.animation = "pulse 0.3s ease-in-out"
                setTimeout(() => {
                    o[box].style.animation = ""
                }, 300);
            }
        }
    }
}
function resetBoard(){
    let boxes = document.querySelectorAll('.box img');
    clicked = 0;
    win = 0;
    for(let i=0;i<9;i++){
        square[i].style.cursor = "pointer";
    }
    if(secondQueue==1){
        for(let i=0;i<boxes.length;i++){
            boxes[i].classList.add("invisible");
            playerO.classList.remove("invisible");
            playerX.classList.add("invisible");
            player=0;
            secondQueue=0;
        }    
    }
    else if(secondQueue==0){
        for(let i=0;i<boxes.length;i++){
            boxes[i].classList.add("invisible");
            playerO.classList.add("invisible");
            playerX.classList.remove("invisible");
            player=1;
            secondQueue=1;
        } 
    }    
}
let egg = 0;
function easterEgg(){
    egg+=1;
    if(egg==15){
        for(let i=0;i<square.length;i++){
            square[i].style.backgroundColor = "rgb(245, 245, 245)";
            egg=0;
        }
    }
    else if(egg==10){
        for(let i=0;i<square.length;i++){
            square[i].style.backgroundColor = "green";
        }
    }
    else if(egg==5){
        for(let i=0;i<square.length;i++){
            square[i].style.backgroundColor = "pink";
        }
    }
    
}