import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './adduser/adduser.component';
import { UserService }   from './service/user.service';
import { ProjectService } from './service/project.service'
import { TaskService } from './service/task.service';



import {FilterPipe} from './filter.pipe';
import {SortByPipe} from './sort.pipe';
import {ProjectFilterPipe} from './project-filter.pipe';
import { AddProjectComponent } from './addproject/addproject.component';
import { AddTaskComponent } from './addtask/addtask.component';
import { ViewTaskComponent } from './viewtask/viewtask.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    FilterPipe,
    SortByPipe,
    ProjectFilterPipe,
    AddProjectComponent,
    AddTaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,ProjectService,TaskService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
