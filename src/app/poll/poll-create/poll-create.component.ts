import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PollService } from '../poll.service';
import { PollFormState } from '../store/poll.model';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss']
})
export class PollCreateComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private pollService: PollService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      question: this.fb.control('', [Validators.required]),
      image: this.fb.control(''),
      option1: this.fb.control(''),
      option2: this.fb.control(''),
      option3: this.fb.control(''),
      // detail: this.fb.control(''),
    })
  }

  onSave() {
    if (this.form.invalid) return alert('Please input a question?')
    console.log(this.form.value)

    const pollForm: PollFormState = {
      question: this.form.value.question,
      thumbnail: this.form.value.image,
      options: [
        this.form.value.option1,
        this.form.value.option2,
        this.form.value.option3,
      ]
    }
    this.pollService.createPoll(pollForm)
  }

}
