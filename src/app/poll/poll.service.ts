import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PollFormState, PollState, VoterState } from './store/poll.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor() { }

  getPolls(): Observable<PollState[]> {
    return of([
      {
        id: 1,
        question: 'Do you like cat or dog?',
        result: [2, 4, 5], // for chart
        options: ['cat', 'dog', 'bird'],
        thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        voted: true
      }
    ]).pipe(delay(2000))
  }

  vote(data: VoterState) {
    console.log(data)
  }

  createPoll(data: PollFormState) {
    console.log(data)
  }
}
