
const displayList = ["./game_display/3d-rpg.png","./game_display/Shoot 'em Up Game.png","./game_display/developingGame.png"]
const introduction_url = ["../game_introduction/rpg-game.html","../game_introduction/shoot_game.html","../game_introduction/new-3d-game.html"]
const game_title = ["3D RPG Game","shoot'em Up Game","Project Under Development"]

var displayContent = document.createElement('img');

var nowImage = 0;
var size = displayList.length

var buttonArray = []

displayContent.id = 'displayContent'
displayContent.className = 'display-content'

displayContent.src = displayList[nowImage]

var container = document.getElementById('game-display-container');
container.appendChild(displayContent);

var canChange = true;

var button_container = document.getElementById('content-button-container');

var titleObject = document.getElementById('game-title');

let nextImage = document.createElement('src');
nextImage.src = displayList[0];

button_container.className = "content-button-container"
for(let i=0;i<size;i++)
{
    let contentButton = document.createElement('button');
    contentButton.id = "content-button" + i;
    contentButton.className = "content-button"
    contentButton.addEventListener('click',function(){
        if(nowImage === i)
        {
            return;
        }
        buttonArray[nowImage].style.backgroundColor = "white"
        nowImage = i
        displayContent.style.opacity = 0;
        canChange = false;
        setTimeout(()=>{
            displayContent.src = displayList[nowImage];
            nextImage.src = displayList[(nowImage + 1)%size];
            titleObject.innerText = game_title[nowImage];
            buttonArray[nowImage].style.backgroundColor = "black"
            displayContent.style.opacity = 1;
        },1000)
    })
    button_container.append(contentButton); 
    buttonArray.push(contentButton);
}


buttonArray[0].style.backgroundColor = "black"
titleObject.innerText = game_title[0];

setInterval(()=>{
    if(canChange === false)
    {
        canChange = true;
        return
    }
    buttonArray[nowImage].style.backgroundColor = "white"
    nowImage = (nowImage + 1)%size;
    displayContent.style.opacity = 0;
    setTimeout(()=>{
        displayContent.src = displayList[nowImage];
        nextImage.src = displayList[(nowImage + 1)%size];
        titleObject.innerText = game_title[nowImage];
        buttonArray[nowImage].style.backgroundColor = "black"
        displayContent.style.opacity = 1;
    },1000)
},5000)

displayContent.addEventListener("click",function(){
    window.location.href = introduction_url[nowImage];
})


