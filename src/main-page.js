

function generateMainLayout(contentElement) {
    const header = document.createElement('header');
    header.innerHTML = "task's"
    const categories = document.createElement('div');
    const mainView = document.createElement('div');
    const mainPage = [header, categories, mainView]
    const newTaskPrompt = document.createElement('div')

    categories.classList.add('categories');
    mainView.classList.add('items');

    mainPage.forEach(e => {
        contentElement.appendChild(e)
        }
    )
}


// function categoryDataHandler(categorytaskItems) {
//     categorytaskItems.forEach( i => {
//         const title = i.title;
//         const description = i.description;
//         const date = i.date;
//         return [title, description, date]
//     })
// }

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

function displayCategory(mainViewElement, categoryTitleValue, arrayOfItems) {
    const categoryContainer = document.createElement('div');
    const listContainer = document.createElement('ul');
    const categoryTitle = document.createElement('h3');
    categoryTitle.innerHTML = categoryTitleValue

    categoryTitle.classList.add('category-title');
    categoryContainer.classList.add('category-container');
    listContainer.classList.add('list-container');
    arrayOfItems.forEach( i => {
        displayTask(listContainer, i.title, i.description, i.dueDate)
    })
    categoryContainer.appendChild(listContainer)
    mainViewElement.appendChild(categoryContainer);
}



export { generateMainLayout, displayCategory }