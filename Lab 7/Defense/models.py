class Task:
    def __init__(self, task_id: int, title: str, completed: bool = False):
        self.task_id = task_id
        self.title = title
        self.completed = completed

    def mark_completed(self) -> None:
        self.completed = True

    def __str__(self) -> str:
        return f"[{self.task_id}] {self.title} " + ("✅" if self.completed else "❌")

    def to_dict(self) -> dict:
        return {
            "task_id": self.task_id,
            "title": self.title,
            "completed": self.completed
        }

    @classmethod
    def from_dict(cls, data: dict):
        return cls(
            task_id=data["task_id"],
            title=data["title"],
            completed=data["completed"]
        )
    
class TaskManager:
    def __init__(self, tasks=None):
        self.tasks = tasks if tasks is not None else []

    def get_next_id(self) -> int:
        return max([task.task_id for task in self.tasks], default=0) + 1

    def add_task(self, title: str):
        new_task = Task(task_id=self.get_next_id(), title=title)
        self.tasks.append(new_task)

    def list_tasks(self):
        return self.tasks

    def complete_task(self, task_id: int) -> bool:
        for task in self.tasks:
            if task.task_id == task_id:
                task.mark_completed()
                return True
        return False

    def delete_task(self, task_id: int) -> bool:
        for i, task in enumerate(self.tasks):
            if task.task_id == task_id:
                del self.tasks[i]
                return True
        return False