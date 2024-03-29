import { categoryDataHandler, setTaskToCategory, taskDataHandler, newCategoryDataHandler, setCategory, setCurrentCategory, getCurrentCategory, getTaskData, updateTaskData, editTask, deleteTask } from "./handlers";
import { taskItem, category } from "./to-do's";
import { displayCategory, displayCategoryList } from "./main-page";



function addTaskButtonListener(selectedCategory) {
    const addTaskButton = document.querySelector('.add-task-button');
    const addItemForm = document.querySelector('#new-task-form');
    const taskOverlay = document.querySelector('#task-overlay');
    const newCurrentCategory = selectedCategory;
    
    const newTaskData = taskDataHandler();
    const task = new taskItem(newTaskData.title, newTaskData.description, newTaskData.date);
        
    setTaskToCategory(newCurrentCategory.title, task)
    setCurrentCategory(newCurrentCategory.title);

    addItemForm.reset();
    location.reload();
    taskOverlay.style.display = "";


    // addTaskButton.addEventListener('click', () => {
    //     const newTaskData = taskDataHandler();
    //     const task = new taskItem(newTaskData.title, newTaskData.description, newTaskData.date);
        
    //     setTaskToCategory(newCurrentCategory.title, task)
    //     setCurrentCategory(newCurrentCategory.title);

    //     addItemForm.reset();
    //     location.reload();
    //     taskOverlay.style.display = "";
    // })
}

function updateTaskButtonListener(selectedCategory) {
    const editTaskButton = document.querySelector('.edit-task-button');
    const editTaskForm = document.querySelector('#edit-task-form');
    const editTaskOverlay = document.querySelector('#view-task-overlay');

    editTaskButton.addEventListener('click', () => {
        const taskData = updateTaskData();
        editTask(selectedCategory.title, taskData);
        setCurrentCategory(selectedCategory.title);

        editTaskForm.reset();
        location.reload()
        editTaskOverlay.style.display = "";
    })
    
}

function deleteTaskButtonListener(selectedCategory) {
    const deleteTaskButton = document.querySelector('.delete-task-button')
    const editTaskForm = document.querySelector('#edit-task-form');
    const editTaskOverlay = document.querySelector('#view-task-overlay');

    deleteTaskButton.addEventListener('click', () => {
        const taskData = updateTaskData();
        deleteTask(selectedCategory.title,taskData);
        setCurrentCategory(selectedCategory.title);

        editTaskForm.reset();
        location.reload()
        editTaskOverlay.style.display = "";

    })
}

function addCategoryButton() {
    const categoryForm = document.querySelector('#category-form');
    const categoryOverlay = document.querySelector('#category-overlay');
    const newCategory = newCategoryDataHandler();
        setCategory(newCategory.title);
        categoryForm.reset();
        location.reload();
        categoryOverlay.style.display = "";
        
}

function cancelButtonListener(){
    const cancelButtons = document.querySelectorAll('.cancel-button, .modal-cancel-button');
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
            
        })
    })
}

function taskItemsListeners(){
    const taskList = document.querySelectorAll('.task-item');

    let currentCategory = document.querySelector('.category-title');
    taskList.forEach((item) => {
        item.addEventListener('click', () => {
            const overlay = document.querySelector('#view-task-overlay');
            const categoryTitle = document.querySelector('#category-title');
            const title = document.querySelector('#edit-taskTitle');
            const description = document.querySelector('#edit-taskDescription');
            const notes = document.querySelector('#edit-taskNotes');
            const status = document.querySelector('#taskStatus')
            const priority = document.querySelector('#priority');
            const dueDate = document.querySelector('#dueDate');

            overlay.style.display = "flex";


            const taskName = item.firstChild.innerHTML;
            const taskData = getTaskData(currentCategory.innerHTML, taskName);


            categoryTitle.innerHTML = currentCategory.innerHTML;
            title.value = taskData.title;
            description.value = taskData.description;
            notes.value= taskData.notes;
            status.value = taskData.status;
            if (taskData.priority == undefined) {
                priority.value = "P4"
            } else {
                priority.value = taskData.priority;
            }
            const thisDate = taskData.dueDate;
            console.log(String(thisDate));
            dueDate.value = String(thisDate);

        })
    })
}





export { addTaskButtonListener , addCategoryButton, cancelButtonListener, categorySelectListeners, taskItemsListeners, updateTaskButtonListener, deleteTaskButtonListener}