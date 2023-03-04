import { categoryDataHandler, setTaskToCategory, taskDataHandler, newCategoryDataHandler, setCategory, setCurrentCategory, getCurrentCategory } from "./handlers";
import { taskItem, category } from "./to-do's";
import { displayCategory, displayCategoryList } from "./main-page";



function addTaskButtonListener(selectedCategory) {
    const addTaskButton = document.querySelector('.add-task-button');
    const addItemForm = document.querySelector('#task-form');
    const taskOverlay = document.querySelector('#task-overlay');
    const selectedCategoryTitle = categoryDataHandler();
    const newCurrentCategory = selectedCategory;
    
    addTaskButton.addEventListener('click', () => {
        const newTaskData = taskDataHandler();
        // if(newTaskData.title == "") {
        //     alert("Please enter Task Title")
        //     return
        // }
        
        setTaskToCategory(newCurrentCategory.title, newTaskData)
        setCurrentCategory(newCurrentCategory.title);
        // const currentCategory = getCurrentCategory();
        const task = new taskItem(newTaskData.title, newTaskData.description, newTaskData.date);
        // currentCategory.title
        // currentCategory.addItem(task);
        addItemForm.reset();
        location.reload();
        // displayCategory(currentCategory.title, currentCategory.taskItems);
        taskOverlay.style.display = "";
    })
}

function updateTaskButtonListener() {
    
}

function addCategoryButtonListener() {
    const addCategoryButton = document.querySelector('.add-category-button')
    const categoryForm = document.querySelector('#category-form');
    const categoryOverlay = document.querySelector('#category-overlay');

    addCategoryButton.addEventListener('click', () => {
        const newCategory = newCategoryDataHandler();
        // const categoryObj = new category(newCategory.title);
        setCategory(newCategory.title);
        // categoriesObject[newCategory.title] = categoryObj;
        categoryForm.reset();
        location.reload();
        // displayCategoryList(categoriesObject);
        // categorySelectListeners(categoriesObject, categoriesObject[newCategory.title]);
        categoryOverlay.style.display = "";
    })
}

function cancelButtonListener(){
    const cancelButtons = document.querySelectorAll('.cancel-button');
    const forms = document.querySelectorAll('form');
    const overlays = document.querySelectorAll('.overlay');
    cancelButtons.forEach( button => {
        button.addEventListener('click', () => {
            forms.forEach( form => {
                form.reset()
            })
            overlays.forEach( overlay => {
                overlay.style.display = "";
            })
        })
    })
   
}

function categorySelectListeners(categories){
    const categoryItems = document.querySelectorAll('.category-name');
    categoryItems.forEach( (item) => {
        item.addEventListener('click', () => {
            const currentCategory = categories[`${item.innerHTML}`];
            setCurrentCategory(currentCategory.title);
            location.reload();
            // displayCategory(currentCategory.title, currentCategory.taskItems);
        })
    })
}

function taskItemsListeners(){
    const taskList = document.querySelectorAll('.task-item');
    taskList.forEach((item) => {
        item.addEventListener('click', () => {
            const overlay = document.querySelector('#view-task-overlay');
            overlay.style.display = "flex";
        })
    })
}



export { addTaskButtonListener , addCategoryButtonListener, cancelButtonListener, categorySelectListeners, taskItemsListeners}