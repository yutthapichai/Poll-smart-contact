import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PollService } from '../poll.service';
import { VoterState } from '../store/poll.model';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {

  @Input() id!: number
  @Input() question!: string
  @Input() option: string[] = []
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private pollService: PollService
  ) { }

  ngOnInit() {
    console.log(this.id)
    this.form = this.fb.group({
      selected: this.fb.control('', [Validators.required]),
    })
  }

  onSave() {
    if (this.form.invalid) return alert('Please input a selected?')
    
    const voteForm: VoterState = {
      id: this.id,
      voted: this.form.value.selected
    }
    this.pollService.vote(voteForm)
  }

}
