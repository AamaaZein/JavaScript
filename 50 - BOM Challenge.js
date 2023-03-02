let tasks = document.querySelector(".tasks");
let input = document.querySelector(".input");
let add = document.querySelector(".add");
//window.localStorage.clear();
function createTask(task) {
    let div = document.createElement("div");
    let lable = document.createElement("label");
    lable.innerHTML = task.title;
    let btn = document.createElement("button");
    btn.setAttribute("id", task.id);
    btn.innerHTML = "Delete";
    div.append(lable);
    div.append(btn);
    tasks.append(div);
}
if (window.localStorage.getItem("noOfTasks") === null) {
    window.localStorage.setItem("noOfTasks", 0);
}

function show() {
    for (let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i);
    if (key === "tasks") {
        let tasks = window.localStorage.getItem(key);
        if (tasks !== null) {
        tasks = JSON.parse(tasks);
        tasks.forEach((task) => {
            createTask(task);
        });
        }
    }
    }
}
show();
document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    if (input.value === "") {
    return;
    }
    let arr = window.localStorage.getItem("tasks");
    if (arr === null) {
    arr = [];
    } else {
    arr = JSON.parse(arr);
    }
    console.log(arr);
    let task = {
    id: +window.localStorage.getItem("noOfTasks") + 1,
    title: input.value,
    };
    input.value = "";
    arr.push(task);
    window.localStorage.setItem("noOfTasks", task.id);
    window.localStorage.setItem("tasks", JSON.stringify(arr));
    createTask(task);
};
let btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
    let no = btns[i].getAttribute("id");
    let arr = window.localStorage.getItem("tasks");
    arr = JSON.parse(arr);
    let index;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].id === no) {
        index = j;
        }
    }
    arr.splice(index, 1);
    window.localStorage.setItem("tasks", JSON.stringify(arr));
    btns[i].parentNode.remove();
    };
}