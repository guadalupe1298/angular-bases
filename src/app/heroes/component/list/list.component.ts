import { Component } from '@angular/core';

@Component({
  // El selector es el nombre que se pondra para utilzar el componente.
  selector: 'app-heroes-list',
  templateUrl: '../../list/list.component.html',
  styleUrls: ['../../list/list.component.css']
})
export class ListComponent {
  heroNames:string[]= ['Spiderman', 'Iroman', 'Hulk', 'Thor'];

  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
