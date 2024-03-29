

function generateMainLayout(contentElement) {
    const header = document.createElement('header');
    header.innerHTML = "To Do's"
    const categories = document.createElement('div');
    const mainView = document.createElement('div');
    const mainPage = [header, categories, mainView]

    categories.classList.add('categories');
    mainView.classList.add('items');

    mainPage.forEach(e => {
        contentElement.appendChild(e)
        }
    )
    
    displayAddCategoryButton();
    
    // Displaying currently selected category items/ main view
    const categoryContainer = document.createElement('div');
    const categoryTitle = document.createElement('h3');
    const listContainer = document.createElement('ul');
    


    categoryContainer.classList.add('category-container');
    categoryTitle.classList.add('category-title');
    listContainer.classList.add('list-container');

    categoryContainer.appendChild(categoryTitle);
    categoryContainer.appendChild(listContainer)
    mainView.appendChild(categoryContainer)

    // Displaying the list of all categories in the left pane
    const categoryListContainer = document.createElement('ul');
    categoryListContainer.classList.add('category-list');

    categories.appendChild(categoryListContainer);

}



function displayTask(listContainer, title, date, priority){
    const taskContainer = document.createElement('li');
    const titleElement = document.createElement('div');
    const dateElement = document.createElement('div')
    
    titleElement.innerHTML = title;
    dateElement.innerHTML = date;

    const allElements = [titleElement, dateElement];
    allElements.forEach( e => {
        taskContainer.appendChild(e)
    })
    taskContainer.classList.add("task-item");
    if (priority == "P1")  {
        taskContainer.classList.add("P1")
    } else if (priority == "P2") {
        taskContainer.classList.add("P2")
    } else if (priority == "P3") {
        taskContainer.classList.add("P3")
    }
    listContainer.appendChild(taskContainer);

}

function displayAddTaskButton() {
    const mainItemsView = document.querySelector('.list-container');
    const addTaskButton = document.createElement('button');
    const plusImg = document.createElement('img');

    
    addTaskButton.type = "button"
    addTaskButton.classList.add('newTaskButton');

    addTaskButton.addEventListener('click', () => {
        const overlay = document.querySelector('#add-task-overlay');
        overlay.style.display = "flex";
    });
    plusImg.src = "/src/images/note-plus.svg";
    plusImg.alt = "Add task icon"
    plusImg.classList.add('icons');
    addTaskButton.appendChild(plusImg);
    mainItemsView.appendChild(addTaskButton);

}

function displayAddCategoryButton() {
    const categoriesView = document.querySelector('.categories');
    const addCategoryButton = document.createElement('button');
    const plusImg = document.createElement('img');
    
    addCategoryButton.type = "button"
    addCategoryButton.classList.add('newCategoryButton');
    

    addCategoryButton.addEventListener('click', () => {
        const overlay = document.querySelector('#category-overlay');
        overlay.style.display = "flex";
    });
    plusImg.src = "/src/images/plus.svg";
    plusImg.alt = "Add task icon"
    plusImg.classList.add('icons');
    addCategoryButton.appendChild(plusImg);
    categoriesView.appendChild(addCategoryButton);

}

function displayCategory(categoryTitleValue, arrayOfItems) {
    const listContainer = document.querySelector('.list-container');
    const categoryTitle = document.querySelector('.category-title');
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }

    categoryTitle.innerHTML = categoryTitleValue;

    
    arrayOfItems.forEach( i => {
        displayTask(listContainer, i.title, i.dueDate, i.priority)
    })
    displayAddTaskButton();
    
}

function displayCategoryList(categories) {
    const categoryList = document.querySelector('.category-list');
    while (categoryList.firstChild) {
        categoryList.removeChild(categoryList.firstChild);
    }
    for (const entry in categories){
        let categoryName = document.createElement('li');
        categoryName.classList.add('category-name');
        categoryName.innerHTML = `${entry}`;
        categoryList.appendChild(categoryName);

    }
}



export { generateMainLayout, displayCategory, displayCategoryList }