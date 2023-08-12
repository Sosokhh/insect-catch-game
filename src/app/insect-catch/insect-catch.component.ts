import {Component} from '@angular/core';
import {InsectCatchService} from "./insect-catch.service";

@Component({
  selector: 'app-insect-catch',
  templateUrl: './insect-catch.component.html',
  styleUrls: ['./insect-catch.component.scss']
})
export class InsectCatchComponent {
  timer: boolean = false;

  constructor(private insectCatchService: InsectCatchService) {}

  get currentScreen() {
    return this.insectCatchService.currentScreen;
  }

  startTimer(timer: boolean) {
    this.timer = timer;
  }
}
