import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent }    from './adduser/adduser.component';
import { AddProjectComponent } from './addproject/addproject.component';
import { AddTaskComponent }    from './addtask/addtask.component';
import { ViewTaskComponent }    from './viewtask/viewtask.component';

const routes: Routes = [
  { path: '', redirectTo: '/adduser', pathMatch: 'full' },
  { path: 'addproject', component: AddProjectComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'viewtask', component:  ViewTaskComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
