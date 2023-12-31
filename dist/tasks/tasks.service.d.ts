import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(CreateTaskDto: CreateTaskDto): Task;
    getTaskById(id: string): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
    getTasksWithFilters(filterDto: GetTaskFilterDto): Task[];
}
