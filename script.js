const ToDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown",function(event){
    if (event.key === "Enter")
        addItem();
})
function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "darkgray";
    checkIcon.addEventListener("click", function() {
        checkIcon.style.color = "limegreen";
    })
    divChild.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgrey";
    trashIcon.addEventListener("click", function() {
        divParent.remove();
    })
    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    ToDoItems.appendChild(divParent);

    input.value = '';
}
var Icon = document.getElementById("Icon");
Icon.onclick=function(){
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")){
        Icon.src="Image/sun.png";
    }else{
        Icon.src = "Image/moon.png";
    }
}