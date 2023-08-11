import {Component, ElementRef, Renderer2} from '@angular/core';
import {InsectCatchService} from "./insect-catch.service";
import {Insect} from "./insects.model";

@Component({
  selector: 'app-insect-catch',
  templateUrl: './insect-catch.component.html',
  styleUrls: ['./insect-catch.component.scss']
})
export class InsectCatchComponent {
  insects: Insect[] = this.insectCatchService.insects;
  startGame: boolean = false;
  selectInsect: boolean = false;
  timer: boolean = false;
  insect!: Insect;
  score: number = 0;

  constructor(
    private insectCatchService: InsectCatchService,
    private renderer: Renderer2,
    private elementRef: ElementRef) {
  }


  chooseInsect($event: Insect) {
    this.selectInsect = true;
    this.insect = $event;
    this.timer = true;
    this.createInsect();
  }

  createInsect() {
    const insect = this.renderer.createElement('div');
    this.renderer.addClass(insect, 'insect');
    const { x, y } = this.getRandomLocation();
    this.renderer.setStyle(insect, 'top', `${y}px`);
    this.renderer.setStyle(insect, 'left', `${x}px`);

    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', this.insect.imagePath);
    this.renderer.setAttribute(img, 'alt', this.insect.name);
    const rotation = Math.random() * 360;
    this.renderer.setStyle(img, 'transform', `rotate(${rotation}deg)`);

    this.renderer.appendChild(insect, img);

    this.renderer.listen(insect, 'click', () => {
      this.catchInsect(insect);
    })

    const container = this.elementRef.nativeElement.querySelector('#game-container');
    this.renderer.appendChild(container, insect);
  }

  getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
  }

  private catchInsect(insect: HTMLDivElement) {
    this.score++;
    this.renderer.addClass(insect, 'caught');
    setTimeout(() => insect.remove(), 2000);
    this.addInsects();
  }

  addInsects() {
    debugger
    setTimeout(this.createInsect.bind(this), 1000);
    setTimeout(this.createInsect.bind(this), 1500);
  }


}
