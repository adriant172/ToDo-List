import { generateMainLayout, displayCategory, displayCategoryList } from "./main-page";
import { taskItem, category} from "./to-do's";
import { getAllCategories, toDoDataHandler } from "./handlers";
import { addTaskButtonListener , addCategoryButtonListener, cancelButtonListener, categorySelectListeners} from "./buttons"


import { format } from "date-fns";
import './styles.css';

let currentCategory;
let categories;
let currentCategoryData;
let categoriesData;

const content = document.querySelector('#content');
generateMainLayout(content);


if ( window.localStorage.getItem("categories") == null) {
    const defaultItem = {title: "Default", taskItems: []};
     categories = {
        "Default": defaultItem,
    }
    currentCategory = new category(defaultItem.title);
    window.localStorage.setItem("categories", JSON.stringify(categories));
    window.localStorage.setItem("currentCategory", JSON.stringify(defaultItem));
} else {
    currentCategoryData = JSON.parse(window.localStorage.getItem("currentCategory"));
    categoriesData = JSON.parse(window.localStorage.getItem("categories"));

    currentCategory = new category(currentCategoryData.title);
    currentCategory.taskItems = currentCategoryData.taskItems;
    categories = getAllCategories();
}


displayCategoryList(categories)


displayCategory(currentCategory.title, currentCategory.taskItems);




addTaskButtonListener(currentCategory);
addCategoryButtonListener();
cancelButtonListener();
categorySelectListeners(categories);





// const  = new taskItem("Walk the dog", "The Dog needs to go for a morning walk everyday", format(new Date(2022, 12, 16), "yyyy/MM/dd"), "2")




