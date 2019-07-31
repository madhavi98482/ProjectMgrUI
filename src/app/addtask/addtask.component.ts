import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd } from '@angular/router';
import {filter, map} from 'rxjs/operators';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { Project } from '../model/project.model';
import { ProjectService } from '../service/project.service';
import { Task } from '../model/task.model';
import { TaskService } from '../service/task.service';
import { ParentTask } from '../model/parenttask.model';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddTaskComponent implements OnInit {

  users: User[]=[];
  projects: Project[]=[];
  parentTasks: ParentTask[]=[];
  task: object = {};

  disable: boolean = false;
  editTaskFlag : boolean = false;
  

  constructor(private userService: UserService, private projectService: ProjectService, private taskService: TaskService,
    router:Router, route:ActivatedRoute) { 
    
    if(this.taskService.task != null){
      this.task = this.taskService.task;
      this.taskService.task = null;
      this.editTaskFlag = this.taskService.editTaskFlag;
      this.taskService.editTaskFlag = false;
    }
  }

  ngOnInit() {
      this.getUsers();
      this.getProjects();
      this.getParentTask();
  }
 
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users)
  }

  getProjects(): void{
   this.projectService.getProjects()
  .subscribe(projects => this.projects = projects)
  }

  addTask(task: Task): void {
   
    this.taskService.addTask(task).subscribe();
  }

  editTask(task : Task): void {
    this.taskService.editTask(task).subscribe();
    this.editTaskFlag = false;
  }

  changeEvent(event: boolean): void{
    this.disable = event;
  }

  getParentTask(): void{
    this.taskService.getParentTask()
    .subscribe(parentTasks => this.parentTasks = parentTasks)
  }


}
