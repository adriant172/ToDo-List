

function generateMainLayout(contentElement) {
    const header = document.createElement('header');
    header.innerHTML = "ToDo's"
    const projects = document.createElement('div');
    const todoItems = document.createElement('div');
    const mainPage = [header, projects, todoItems]

    projects.classList.add('projects');
    todoItems.classList.add('items');

    mainPage.forEach(e => {
        contentElement.appendChild(e)
        }
    )

}

function DisplayToDo(category, title, description, date){
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
    category.appendChild(toDoContainer);

  
}

function displayCategory() {

}



export { generateMainLayout }