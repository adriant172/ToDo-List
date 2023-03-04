import { category } from "./to-do's";


function taskDataHandler() {
    const taskTitle = document.querySelector('#taskTitle');
    const taskDescription = document.querySelector('#taskDescription');
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
    const taskPriority = document.querySelector('#taskPriority').value;
    const taskDueDate = document.querySelector('#taskDueDate').value;

    return { title: taskTitle, description: taskDescription, notes: taskNotes, status: taskStatus, priority: taskPriority, dueDate: taskDueDate }
}

function getTaskData(){

}



export { getCurrentCategory, taskDataHandler, categoryDataHandler, getAllCategories, setCategory, setTaskToCategory, newCategoryDataHandler, setCurrentCategory , updateTaskData }