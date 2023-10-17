import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(CreateTaskDto: CreateTaskDto): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}