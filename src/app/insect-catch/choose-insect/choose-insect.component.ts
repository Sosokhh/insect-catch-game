import {Component, EventEmitter, Output} from '@angular/core';
import {Insect} from "../insects.model";
import {InsectCatchService} from "../insect-catch.service";

@Component({
  selector: 'app-choose-insect',
  templateUrl: './choose-insect.component.html',
  styleUrls: ['./choose-insect.component.scss']
})
export class ChooseInsectComponent {
  @Output() startTimer = new EventEmitter<boolean>();
  insects: Insect[] = this.insectCatchService.insects;

  constructor(private insectCatchService: InsectCatchService) {}

  chooseInsect(chosenInsect: Insect) {
    this.insectCatchService.currentScreen++;
    this.insectCatchService.updateChosenInsect(chosenInsect);
    this.startTimer.emit(true);
  }

}
