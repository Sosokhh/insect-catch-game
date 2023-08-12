import {Component} from '@angular/core';
import {InsectCatchService} from "../insect-catch.service";

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {

  constructor(private insectCatchService: InsectCatchService) {}

  startGame() {
    this.insectCatchService.currentScreen++;
  }
}
