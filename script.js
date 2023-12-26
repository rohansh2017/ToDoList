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
            li.innerHTML += ' ' + dateBox.value;
        if (timeBox != null)
            li.innerHTML += ' ' + timeBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dateBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function searchEvent(){
    const searchBox = document.getElementById("search-box");
    const searchContainer = document.getElementById("search-container");
    let liElements = listContainer.getElementsByTagName("li");
    let searchedItems = [];
    for(let i = 0; i < liElements.length; i++){
        if(liElements[i].innerHTML.includes(searchBox.value)){
            searchedItems.push(liElements[i].innerHTML);
        }
    }
    searchContainer.innerHTML = '';
    searchedItems.forEach(function(item){
        let x = document.createElement("li");
        x.innerHTML = item;
        searchContainer.appendChild(x);
    });
}
function clearAllEvents(){
    listContainer.innerHTML = "";
    saveData();
}
// function clearData() {
//     localStorage.clear();
// }
showTask();
searchEvent();
document.getElementById("clear-all-btn").addEventListener("click", clearAllEvents, false);
//clearData();
