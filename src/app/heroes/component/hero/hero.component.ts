import { Component } from '@angular/core';
//La parte importante
//es un decorador que se declara el componente y los estilos css.
@Component({
  selector: 'app-heroes-hero',
  templateUrl: '../../hero/hero.component.html',
  styleUrls: ['../../hero/hero.component.css']
})
export class HeroComponent {

  public name: string = "ironman";
  public age : number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
//cuando el metodo es public no se debe de agregar. Y cuado es private solo se agrega dentro de la clase no se puede actualizar en ninguna.
  getHeroDescripcion():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = "Spiderman";
  }
  changeAge():void{
    this.age = 50
  }

  reset():void{
    this.name = 'ironman'
    this.age = 45
  }
}
