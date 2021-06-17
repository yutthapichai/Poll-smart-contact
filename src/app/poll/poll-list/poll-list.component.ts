import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PollService } from '../poll.service';
import { PollState } from '../store/poll.model';
// import ApexCharts from 'apexcharts'

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {

  showform = false;

  data = this.pollService.getPolls()

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.showform = !this.showform 
  }
}
