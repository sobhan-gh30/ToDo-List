//To Get Class and id easier
function _id(id){
    return document.getElementById(id);
}
function _class(Class){
    return document.getElementsByClassName(Class);
}

// Setting an event for new tasks
let newTask = _id("new-task-btn");
let newToDo ;


newTask.addEventListener("click", function() {
    //changing btn style
    newTask.style.width = "100%";
    newTask.style.borderRadius = "0";
    newTask.style.height = "55px";
    newTask.style.transform = "translateY(0)";
    newTask.style.display = "flex";
    newTask.style.justifyContent = "center";
    newTask.style.alignItems = "center";



    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "New task";
    input.style.width = "80%";

    newTask.innerHTML = "";
    newTask.appendChild(input);
    input.focus()


    input.addEventListener("keypress" , function (key){
        if (key.key === 'Enter'){
            if (input.value !== ""){
                newToDo = input.value

                //Adding new to do
                let li = document.createElement("li");
                li.innerHTML = `
                <div>
                    <h2>${newToDo}</h2>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" onclick="removeTask(this)">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </div>
                `

                let ul = document.querySelector("ul");
                ul.append(li);

                newTask.innerHTML = "+ New Task";
                newTask.style.width = "18%";
                newTask.style.borderRadius = "20px";
                newTask.style.height = "50px";
                newTask.style.transform = "translateY(-45px)";
            } else {

                newTask.innerHTML = "+ New Task";
                newTask.style.width = "18%";
                newTask.style.borderRadius = "20px";
                newTask.style.height = "50px";
                newTask.style.transform = "translateY(-45px)";
            }
        }
    })
});


function removeTask(obj){
    let parent = obj.parentNode.parentNode;
    parent.remove();
}
