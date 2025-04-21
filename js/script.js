//document.getElementById("btn-5").addEventListener("click",addNumber)
let allbtn = document.getElementsByClassName("boxbtn");
for(btn of allbtn){
    btn.addEventListener('click',addNumber)
}

function addNumber(){
    let completedNumber = document.getElementById('completedTask').innerHTML;
    //alert(completedNumber);
    let addTask = document.getElementById("taskAdded").innerText= completedNumber;
    let allTask = document.getElementsByClassName('addNumber');
     //let numberTasks = parseInt(allTask);
    // let numberTask = ''
    for(const task of allTask){
        let numberTask = parseInt(task.innerText);
        //console.log(numberTask+1);
        //console.log(task.innerText);
        let sumData = numberTask+1;
        alert(sumData);
        task.innerText=sumData;
    }
}

document.getElementById('btnHistory').addEventListener("click",removeHistory);
function removeHistory(){
    let btnHistory = document.getElementById("taskAdded").textContent='';
}

