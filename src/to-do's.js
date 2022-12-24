

class taskItem {
    constructor(title, description, dueDate, priorityLevel){
        this.title = title;
        this.description= description;
        this.dueDate = dueDate;
        this.priorityLevel = priorityLevel;
        this.status = "To Do";
        this.notes;
        this.checklist = [];
    }
}

class category {
    constructor(title){
        this.title = title;
        this.taskItems = [];
    }
    addItem(itemObj) {
        this.toDoItems.push(itemObj)
    }

}

export { taskItem, category }