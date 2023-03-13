import { category } from "./to-do's";


function taskDataHandler() {
    const taskTitle = document.querySelector('#newTaskTitle');
    const taskDescription = document.querySelector('#newTaskDescription');
    const taskDate = document.querySelector('#taskDueDate');

    return {"title": taskTitle.value, "description": taskDescription.value, "date": taskDate.value}
}

function categoryDataHandler(){
    const categoryTitle = document.querySelector('.category-title');

    return { "title": categoryTitle.innerHTML }
}
function newCategoryDataHandler(){
    const newCategoryTitle = document.querySelector('#newCategoryTitle')

    return {"title": newCategoryTitle.value }
}

function getAllCategories(){
    const categories = {}
    const categoriesData = JSON.parse(window.localStorage.getItem("categories"));
    for (const catObject in categoriesData) {
        const cat = new category(`${catObject}`);
        const taskItems = categoriesData[catObject]["taskItems"];
        for (const task of taskItems) {
            cat.addItem(task);
        }
        categories[cat.title] = cat;
    }
        return categories
}

function setCategory(name){
    const allCategories = getAllCategories();
    allCategories[name] = {"title": name, "taskItems":[]};
    window.localStorage.categories = JSON.stringify(allCategories);
}

function setTaskToCategory(categoryName, taskObject){
    const allCategories = getAllCategories();
    allCategories[categoryName]['taskItems'].push(taskObject);
    window.localStorage.categories = JSON.stringify(allCategories);
}

function editTask(categoryName, taskObject) {
    const allCategories = getAllCategories();
    const allTasks = allCategories[categoryName]['taskItems'];
    allTasks.forEach( (task, index) => {
        if (task.title == taskObject.title){
            allTasks[index] = taskObject;
        }
    });
    allCategories[categoryName]['taskItems'] = allTasks;
    window.localStorage.categories = JSON.stringify(allCategories);
}

function deleteTask(categoryName, taskObject){
    const allCategories = getAllCategories();
    const allTasks = allCategories[categoryName]['taskItems'];
    allTasks.forEach( (task, index) => {
        if (task.title == taskObject.title){
            allTasks.splice(index, 1);
        }
    });
    allCategories[categoryName]['taskItems'] = allTasks;
    window.localStorage.categories = JSON.stringify(allCategories);

}

function setCurrentCategory(categoryName){
    const allCategories = getAllCategories();
    const selectedCategory = allCategories[categoryName];
    window.localStorage.setItem("currentCategory", JSON.stringify(selectedCategory));
}

function getCurrentCategory(){
    const currentCategory = JSON.parse(window.localStorage.getItem("currentCategory"));
    return currentCategory
}

function updateTaskData(){
    const taskTitle = document.querySelector('#edit-taskTitle').value;
    const taskDescription = document.querySelector('#edit-taskDescription').value;
    const taskNotes = document.querySelector('#edit-taskNotes').value;
    const taskStatus = document.querySelector('#taskStatus').value;
    const taskPriority = document.querySelector('#priority').value;
    const taskDueDate = document.querySelector('#dueDate').value;

    console.log({ title: taskTitle, description: taskDescription, notes: taskNotes, status: taskStatus, priority: taskPriority, dueDate: taskDueDate });
    return { title: taskTitle, description: taskDescription, notes: taskNotes, status: taskStatus, priority: taskPriority, dueDate: taskDueDate }
}

function getTaskData(categoryName, taskName){
    const allCategories = getAllCategories();
    
    const tasks = allCategories[categoryName].taskItems;
    for (const task of tasks) {
        if (task.title == taskName) {
            return task
        }
    }
}



export { getCurrentCategory, taskDataHandler, categoryDataHandler, getAllCategories, setCategory, setTaskToCategory, newCategoryDataHandler, setCurrentCategory , updateTaskData, getTaskData, editTask, deleteTask }