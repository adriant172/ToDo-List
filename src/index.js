import { generateMainLayout, displayCategory, displayCategoryList } from "./main-page";
import { taskItem, category} from "./to-do's";
import { toDoDataHandler } from "./handlers";
import { addTaskButtonListener , addCategoryButtonListener, cancelButtonListener, categorySelectListeners} from "./buttons"


import { format } from "date-fns";
import './styles.css';



const content = document.querySelector('#content');
generateMainLayout(content);

const defaultCategory = new category("Default")

const categories = {
    "Default": defaultCategory
}
const currentCategory = categories["Default"];


displayCategoryList(categories)


if (currentCategory) {
    displayCategory(currentCategory.title, currentCategory.taskItems);
}



addTaskButtonListener(currentCategory);
addCategoryButtonListener(categories);
cancelButtonListener();
categorySelectListeners(categories, currentCategory);





// const  = new taskItem("Walk the dog", "The Dog needs to go for a morning walk everyday", format(new Date(2022, 12, 16), "yyyy/MM/dd"), "2")




