const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dateBox = document.getElementById("date-box");
const timeBox = document.getElementById("time-box");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        if (dateBox != null)
            li.innerHTML += "\t" + dateBox.value;
        if (timeBox != null)
            li.innerHTML += "\t" + timeBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dateBox.value = "";
    // saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// function clearData(){
//     listContainer.innerHTML = localStorage.removeItem("data");
// }
//clearData();
showTask();
