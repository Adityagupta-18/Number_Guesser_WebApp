let rand = Math.floor(Math.random() * 25) + 1
console.log(rand)
let currentscore=25
let hinttext=document.querySelector(".hinttext")
let score=document.querySelector(".score h5")
let highscore=document.querySelector(".bestscore h5")
let box = document.querySelectorAll(".box")
box.forEach(e => {
    e.addEventListener("click", () => {
        let guess=Number(e.textContent)
        if(rand==guess){
            e.style.backgroundColor="#4ac84a"
            hinttext.textContent=" KYA BAAT H LADKE KHEL GAYA"
            if (currentscore>Number(highscore.textContent) ||Number(highscore.textContent)==0){
                highscore.textContent=`${currentscore}`
            }
            hinttext.textContent=" Restarting  in 3 ..."
            setTimeout(() => {hinttext.textContent=" Restarting in 2 ..."}, 1000);
            setTimeout(() => {hinttext.textContent=" Restarting in 1 ..."}, 2000);
            setTimeout(() => {reset()}, 3000);
        }
        else{
            e.style.backgroundColor="red"
            e.style.color="white"
            currentscore-=1
            score.textContent= `${currentscore}`
            if(guess>rand){
                hinttext.textContent=" The numberis less than this !!! "
            }
            else{
                hinttext.textContent=" The number is greater than this !!! "
            }
        }
    })
})
// resetting
function reset(){
    rand = Math.floor(Math.random() * 25) + 1
    currentscore=25
    score.textContent=25
    hinttext.textContent=" Start to get a hint "
    box.forEach(e=>{
        e.style.backgroundColor=""
        e.style.color=""
    })
}