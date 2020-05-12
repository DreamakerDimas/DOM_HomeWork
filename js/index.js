'use strict';

const myPattern = /(?!^\s*?$)^.+$/;

const inputTaskElem = document.querySelector('input[name="taskInput"]');
const createTaskButtonElem = document.getElementById('createTaskButton');
inputTaskElem.oninput = onInputHandler;
createTaskButtonElem.addEventListener('click',onCreateTaskButtonClick);

let isValid = false;

function onCreateTaskButtonClick(event) {
    const taskInputElem = document.querySelector('input[name="taskInput"]')

    if(taskInputElem.value !== ''){//protection from empty data
        listElemAdd(taskInputElem);
    }

    taskInputElem.value = ''; //clear
}

function onInputHandler(event){
    isValid = myPattern.test(this.value);
    if(isValid){
        this.classList.remove('invalidstyle');
        this.classList.add('validstyle');
    }
    else{
        this.classList.remove('validstyle');
        this.classList.add('invalidstyle');
    }
}

function listElemAdd(elem) {
    //text
    const createTaskLiElem = document.createElement('li');
    const createTextParagraph = document.createElement('p');
    createTextParagraph.innerText = elem.value;
    createTaskLiElem.append(createTextParagraph);

    //checkbox
    const createCheckBox = document.createElement('input');
    createCheckBox.setAttribute('type','checkbox');

    //delete button
    const createDelButton = document.createElement('div');
    createDelButton.setAttribute('class','deleteButton');
    createDelButton.innerText = 'Delete';

    //append all
    createTaskLiElem.append(createCheckBox);
    createTaskLiElem.append(createDelButton);

    document.getElementById('taskList').append(createTaskLiElem);

    createDelButton.addEventListener('click',deleteLiElem);
}

function deleteLiElem(event){
    if(this.previousSibling.checked === true){
        this.parentElement.remove();
    }
}