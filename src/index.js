import { generateMainLayout, displayCategory } from "./main-page";
import { taskItem, category} from "./to-do's";
import { toDoDataHandler } from "./handlers";

import { format } from "date-fns";
import './styles.css';



const content = document.querySelector('#content');
generateMainLayout(content);

const mainView = document.querySelector('.items');
const addTaskButton = document.querySelector('.add-task-button');
const cancelButton = document.querySelector('.cancel-button');
const testCategory = new category("Default")
const overlay = document.querySelector('.overlay');
const addItemForm = document.querySelector('#task-form');




if (testCategory.taskItems) {
    displayCategory(testCategory.title, testCategory.taskItems);
}


addTaskButton.addEventListener('click', () => {
    const newTaskData = toDoDataHandler();
    const task = new taskItem(newTaskData.title, newTaskData.description, newTaskData.date);
    testCategory.addItem(task);
    addItemForm.reset();
    displayCategory(testCategory.title, testCategory.taskItems);
    overlay.style.display = "";
})

cancelButton.addEventListener('click', () => {
    addItemForm.reset();
    overlay.style.display = "";

})





// const  = new taskItem("Walk the dog", "The Dog needs to go for a morning walk everyday", format(new Date(2022, 12, 16), "yyyy/MM/dd"), "2")




