import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  time: number = 0;
  formattedTime: string = '00:00';
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.time++;
      this.formatTime();
    }, 1000);
  }

  formatTime() {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    this.formattedTime = `${formattedMinutes}:${formattedSeconds}`;
  }
}
