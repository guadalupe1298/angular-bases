import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

// * El @Input sirve para intercambiar datos entre los componentes, sirve para enviar y recibir de un componente a otro.
// * Se puede agregar el public o no, y cuando es privada el metodo ahi si no se puede utilizar fuera de este comente, solo se puede utilizar adentro.
@Input()
  characterList: Character[] =[{

    nombre:'trunks',
    poder: 10
  }];

@Output()
onDelete: EventEmitter<string> = new EventEmitter();
  onDeletedCharacter(id?:string):void{
    if (!id) return;
    this.onDelete.emit(id);
  }
}
