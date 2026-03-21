from models import TaskManager
from storage import load_tasks, save_tasks

task_manager = TaskManager(load_tasks("data.json"))

def show_menu():
    print("\n=== Task Manager ===")
    print("1. Show Tasks")
    print("2. Add Task")
    print("3. Complete Task")
    print("4. Delete Task")
    print("5. Exit")

def show_tasks(manager):
    print("\nYour Tasks:")
    if not manager.tasks:
        print("No tasks found")
    for task in manager.tasks:
        print(task)

def add_task(manager):
    title = input("Enter task title: ")
    manager.add_task(title)
    print("Task added")

def complete_task(manager):
    try:
        task_id = int(input("Enter task ID to complete: "))
        if not manager.complete_task(task_id):
            print("Task not found")
        else:
            print("Task marked as completed")
    except ValueError:
        print("Invalid input. Please enter a number")

def delete_task(manager):
    try:
        task_id = int(input("Enter task ID to delete: "))
        if not manager.delete_task(task_id):
            print("Task not found")
        else:
            print("Task deleted")
    except ValueError:
        print("Invalid input. Please enter a number")

def main():
    while True:
        show_menu()
        choice = input("Choose an option: ")
        if choice == "1":
            show_tasks(task_manager)
        elif choice == "2":
            add_task(task_manager)
        elif choice == "3":
            complete_task(task_manager)
        elif choice == "4":
            delete_task(task_manager)
        elif choice == "5":
            save_tasks("data.json", task_manager.tasks)
            print("Goodbye!")
            break
        else:
            print("Invalid option. Please try again")

main()