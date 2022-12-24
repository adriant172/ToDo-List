import { generateMainLayout, displayCategory } from "./main-page";
import { taskItem, category } from "./to-do's";

import { format } from "date-fns";
import './styles.css';

const content = document.querySelector("#content");

generateMainLayout(content);
const mainView = document.querySelector(".items");


const testCategory = new category("Default")
const testItem = new taskItem("Walk the dog", "The Dog needs to go for a morning walk everyday", format(new Date(2022, 12, 16), "yyyy/MM/dd"), "2")

testCategory.addItem(testItem);

displayCategory(mainView,testCategory.title, testCategory.taskItems)


