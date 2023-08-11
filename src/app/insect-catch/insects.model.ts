export class Insect {
  public name: string = '';
  public description: string = '';
  public imagePath: string = '';
  public showDescription: boolean = false;

  constructor(name: string, desc: string, imagePath: string, showDesc: boolean) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.showDescription = showDesc;
  }
}
