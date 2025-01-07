const { addTask, removeTask, showTasks } = require('../advanced/todoList');

describe('Todo List', () => {
  it('should add a task correctly', () => {
    addTask("Buy groceries");
    expect(showTasks()).toContain("Buy groceries");
  });

  it('should remove a task correctly', () => {
    addTask("Buy groceries");
    removeTask("Buy groceries");
    expect(showTasks()).not.toContain("Buy groceries");
  });

  it('should show all tasks correctly', () => {
    addTask("Buy groceries");
    addTask("Clean the house");
    expect(showTasks()).toEqual(["Buy groceries", "Clean the house"]);
  });
});
