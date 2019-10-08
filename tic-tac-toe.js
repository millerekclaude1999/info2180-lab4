var game;
var status;
var board;
var controls;
var btn;
var divs;
window.onload = function(){
    game = document.querySelectorAll("#game");
    status = document.querySelectorAll("#status");
    board = document.querySelectorAll("#board");
    controls = document.querySelectorAll(".controls");
    divs = document.getElementsByTagName("div");
    for(let i=0; i<divs.length;i++){
        if(divs[i].id==""){
            if(divs[i].className==""){
                this.divs[i].classList.add("square");
            }
        }
    }  
} 