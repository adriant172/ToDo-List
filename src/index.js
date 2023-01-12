import { generateMainLayout, displayCategory, displayCategoryList } from "./main-page";
import { taskItem, category} from "./to-do's";
import { toDoDataHandler } from "./handlers";
import { addTaskButtonListener , addCategoryButtonListener, cancelButtonListener, categorySelectListeners} from "./buttons"


import { format } from "date-fns";
import './styles.css';

let currentCategory;
let categories;
let currentCategoryData
let categoriesData;

const content = document.querySelector('#content');
generateMainLayout(content);


if ( !window.localStorage.getItem("categories")) {
    const defaultCategory = new category("Default");
    const categories = {
        "Default": defaultCategory
    }
    currentCategory = categories["Default"];
    window.localStorage.setItem("categories", JSON.stringify(categories));
    window.localStorage.setItem("currentCategory", JSON.stringify({
        "Default": {}
    }));
} else {
    currentCategoryData = window.localStorage.getItem("currentCategory");
    categoriesData = window.localStorage.getItem("categories");

    currentCategory = new category(`${cu}`)
}


displayCategoryList(categories)


if (currentCategory) {
    displayCategory(currentCategory.title, currentCategory.taskItems);
}



addTaskButtonListener(categories);
addCategoryButtonListener(categories);
cancelButtonListener();
currentCategory = categorySelectListeners(categories);





// const  = new taskItem("Walk the dog", "The Dog needs to go for a morning walk everyday", format(new Date(2022, 12, 16), "yyyy/MM/dd"), "2")




