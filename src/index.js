import { generateMainLayout } from "./main-page";
import './styles.css';

const content = document.querySelector("#content");

generateMainLayout(content);



class toDoItem {
    constructor(title, description, dueDate, priorityLevel, notes, status, checklist){
        this.title = title;
        this.description= description;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
        this.notes = notes;
        this.checklist = checklist;
        this.status = status;
    }
    
}

