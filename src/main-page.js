import { category, taskItem } from "./to-do's";


function generateMainLayout(contentElement) {
    const header = document.createElement('header');
    header.innerHTML = "task's"
    const categories = document.createElement('div');
    const mainView = document.createElement('div');
    const mainPage = [header, categories, mainView]

    categories.classList.add('categories');
    mainView.classList.add('items');

    mainPage.forEach(e => {
        contentElement.appendChild(e)
        }
    )
    displayAddTaskButton();
    
    const categoryContainer = document.createElement('div');
    const listContainer = document.createElement('ul');
    categoryContainer.classList.add('category-container');
    listContainer.classList.add('list-container');

    categoryContainer.appendChild(listContainer)
    mainView.appendChild(categoryContainer)

    
}



function displayTask(listContainer, title, description, date){
    const taskContainer = document.createElement('li');
    const titleElement = document.createElement('div');
    const descriptionElement = document.createElement('div')
    const dateElement = document.createElement('div')
    
    titleElement.innerHTML = title;
    descriptionElement.innerHTML = description;
    dateElement.innerHTML = date;

    const allElements = [titleElement, descriptionElement, dateElement];
    allElements.forEach( e => {
        taskContainer.appendChild(e)
    })
    taskContainer.classList.add("task-item");
    listContainer.appendChild(taskContainer);

  
}

function displayAddTaskButton() {
    const mainItemsView = document.querySelector('.items');
    const addTaskButton = document.createElement('button');

    
    addTaskButton.type = "button"
    addTaskButton.classList.add('newTaskButton');
    addTaskButton.textContent = "New Task";

    addTaskButton.addEventListener('click', () => {
        const overlay = document.querySelector('.overlay');
        overlay.style.display = "flex";
    });
    mainItemsView.appendChild(addTaskButton);

}

function displayCategory(categoryTitleValue, arrayOfItems) {
    const listContainer = document.querySelector('.list-container')
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }

    const categoryTitle = document.createElement('h3');
    categoryTitle.innerHTML = categoryTitleValue;

    categoryTitle.classList.add('category-title');
    arrayOfItems.forEach( i => {
        displayTask(listContainer, i.title, i.description, i.dueDate)
    })
    
}



export { generateMainLayout, displayCategory }