import {Component, ElementRef, Input, OnDestroy, Renderer2} from '@angular/core';
import {Insect} from "../insects.model";
import {InsectCatchService} from "../insect-catch.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnDestroy{
  @Input() timer: boolean = false;
  score = 0;
  chosenInsect!: Insect
  insectSubscription!: Subscription;

  constructor(private insectCatchService: InsectCatchService, private renderer: Renderer2, private elementRef: ElementRef) {
    this.insectSubscription = this.insectCatchService.chosenInsect$.subscribe(insect => {
      if (insect) {
        setTimeout(() => {
          this.createInsect(insect);
        }, 1000);
        this.chosenInsect = insect;
      }
    });
  }

  createInsect(chosenInsect: Insect) {
    const insect = this.renderer.createElement('div');
    this.renderer.addClass(insect, 'insect');
    const { x, y } = this.getRandomLocation();
    this.renderer.setStyle(insect, 'top', `${y}px`);
    this.renderer.setStyle(insect, 'left', `${x}px`);

    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', chosenInsect.imagePath);
    this.renderer.setAttribute(img, 'alt', chosenInsect.name);
    const rotation = Math.random() * 360;
    this.renderer.setStyle(img, 'transform', `rotate(${rotation}deg)`);

    this.renderer.appendChild(insect, img);

    this.renderer.listen(insect, 'click', () => {
      this.catchInsect(insect);
    })

    const container = this.elementRef.nativeElement.querySelector('.game-container');
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
    setTimeout(() => this.createInsect(this.chosenInsect), 1000);
    setTimeout(() => this.createInsect(this.chosenInsect), 1500);
  }

  ngOnDestroy() {
    this.insectSubscription.unsubscribe();
  }

}
