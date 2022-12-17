
function generateMainLayout(contentElement) {
    const header = document.createElement('header');
    header.innerHTML = "ToDo's"
    const categories = document.createElement('div');
    const mainView = document.createElement('div');
    const mainPage = [header, categories, mainView]

    categories.classList.add('categories');
    mainView.classList.add('items');

    mainPage.forEach(e => {
        contentElement.appendChild(e)
        }
    )

}


// function categoryDataHandler(categoryToDoItems) {
//     categoryToDoItems.forEach( i => {
//         const title = i.title;
//         const description = i.description;
//         const date = i.date;
//         return [title, description, date]
//     })
// }

function displayToDo(categoryContainer, title, description, date){
    const toDoContainer = document.createElement('div');
    const titleElement = document.createElement('p');
    const descriptionElement = document.createElement('p')
    const dateElement = document.createElement('p')
    
    titleElement.innerHTML = title;
    descriptionElement.innerHTML = description;
    dateElement.innerHTML = date;

    const allElements = [titleElement, descriptionElement, dateElement];
    allElements.forEach( e => {
        toDoContainer.appendChild(e)
    })
    toDoContainer.classList.add("toDo-item");
    categoryContainer.appendChild(toDoContainer);

  
}

function displayCategory(mainViewElement,arrayOfItems) {
    let categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container')
    arrayOfItems.forEach( i => {
        displayToDo(categoryContainer, i.title, i.description, i.dueDate)
    })
    mainViewElement.appendChild(categoryContainer);
}



export { generateMainLayout, displayCategory }