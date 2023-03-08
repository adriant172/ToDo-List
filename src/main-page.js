

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



function displayTask(listContainer, title, date){
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
    listContainer.appendChild(taskContainer);

}

function displayAddTaskButton() {
    const mainItemsView = document.querySelector('.items');
    const addTaskButton = document.createElement('button');

    
    addTaskButton.type = "button"
    addTaskButton.classList.add('newTaskButton');
    addTaskButton.textContent = "New Task";

    addTaskButton.addEventListener('click', () => {
        const overlay = document.querySelector('#add-task-overlay');
        overlay.style.display = "flex";
    });
    mainItemsView.appendChild(addTaskButton);

}

function displayAddCategoryButton() {
    const categoriesView = document.querySelector('.categories');
    const addCategoryButton = document.createElement('button');

    
    addCategoryButton.type = "button"
    addCategoryButton.classList.add('newCategoryButton');
    addCategoryButton.textContent = "New Category";

    addCategoryButton.addEventListener('click', () => {
        const overlay = document.querySelector('#category-overlay');
        overlay.style.display = "flex";
    });
    categoriesView.appendChild(addCategoryButton);

}
function displayCategory(categoryTitleValue, arrayOfItems) {
    const listContainer = document.querySelector('.list-container');
    const categoryContainer = document.querySelector('.category-container');
    const categoryTitle = document.querySelector('.category-title')
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }

    categoryTitle.innerHTML = categoryTitleValue;

    
    arrayOfItems.forEach( i => {
        displayTask(listContainer, i.title, i.dueDate)
    })
    
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