import { NgModule } from '@angular/core';

import { AllTasksRoutingModule } from './all-tasks.routing';

import { AllTasksComponent } from './all-tasks.component';

@NgModule({
  imports: [
    AllTasksRoutingModule
  ],
  declarations: [
    AllTasksComponent
  ]
})

export class AllTasksModule { }
