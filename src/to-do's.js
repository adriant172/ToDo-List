

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
        this.taskItems.push(itemObj)
    }
    set allTasks(taskList) {
        if (Array.isArray(taskList) == true) {
            this.taskItems = taskList;
        }

    }

}

export { taskItem, category }