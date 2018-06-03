import { NgModule } from '@angular/core';

import { AllTasksRoutingModule } from './all-tasks.routing';
import {CommonModule} from '@angular/common';
import { AllTasksComponent } from './all-tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
@NgModule({
  imports: [
    AllTasksRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule

  ],
  declarations: [
    AllTasksComponent
  ]
})

export class AllTasksModule { }
