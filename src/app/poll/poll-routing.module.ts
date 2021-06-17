import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollListComponent } from './poll-list/poll-list.component';

const routes: Routes = [
  { path: '', component: PollListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollRoutingModule { }
