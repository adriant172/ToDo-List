import { generateMainLayout, displayCategory, displayCategoryList } from "./main-page";
import { taskItem, category} from "./to-do's";
import { toDoDataHandler } from "./handlers";
import { addTaskButtonListener , addCategoryButtonListener, cancelButtonListener} from "./buttons"


import { format } from "date-fns";
import './styles.css';



const content = document.querySelector('#content');
generateMainLayout(content);

const defaultCategory = new category("Default")
const taskOverlay = document.querySelector('#task-overlay');
const categoryOverlay = document.querySelector('#category-overlay');
const addItemForm = document.querySelector('#task-form');
const categoryForm = document.querySelector('#category-form');
const categories = {
    "default": defaultCategory,
}
let currentCategory = categories["default"]


displayCategoryList(categoryList)


if (defaultCategory.taskItems) {
    displayCategory(defaultCategory.title, defaultCategory.taskItems);
}

addTaskButtonListener(currentCategory, addItemForm, taskOverlay)
addCategoryButtonListener(categories, categoryForm, categoryOverlay)
cancelButtonListener()





// const  = new taskItem("Walk the dog", "The Dog needs to go for a morning walk everyday", format(new Date(2022, 12, 16), "yyyy/MM/dd"), "2")




