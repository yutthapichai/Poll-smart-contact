import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollRoutingModule } from './poll-routing.module';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { SharedModule } from '../shared/shared.module';
import { PollVoteComponent } from './poll-vote/poll-vote.component';
import { PollService } from './poll.service';


@NgModule({
  declarations: [

    PollCreateComponent,
    PollListComponent,
    PollVoteComponent
  ],
  imports: [
    CommonModule,
    PollRoutingModule,
    SharedModule
  ],
  providers: [PollService]
})
export class PollModule { }
