import {Injectable} from "@angular/core";
import {Insect} from "./insects.model";

@Injectable({
  providedIn: 'root'
})
export class InsectCatchService {
  public insects = [
    new Insect('Fly',
      'Meet Freddy the Fly! Don\'t be surprised if you find him buzzing around your leftovers – he\'s the ultimate food critic of the insect world!',
      'http://pngimg.com/uploads/fly/fly_PNG3946.png', false),
    new Insect('Mosquito',
      'Introducing Marty the Mosquito! He\'s the original party crasher, always showing up uninvited to your outdoor events.',
      'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png', false),
    new Insect('Spider',
      'Say hello to Silvia the Spider!' +
      ' She\'s a professional web designer, specializing in creating intricate traps for unsuspecting insects',
      'http://pngimg.com/uploads/spider/spider_PNG12.png', false),
    new Insect('Roach',
      'Get ready to meet Ralph the Roach! He\'s the undisputed hide-and-seek champion of the bug world. Don\'t bother tidying up',
      'http://pngimg.com/uploads/roach/roach_PNG12163.png', false)
  ]
}
