import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
@Output()
  orNewCharacter: EventEmitter<Character> =new EventEmitter();
  public character: Character={
    nombre:'',
    poder: 0

  }

  addCharacter(): void{
    //es para que se quede aho cuando se corra la funcion
  //debugger;
    if (this.character.nombre.length === 0) return;

    this.orNewCharacter.emit(this.character);

    this.character={nombre:'', poder:0}
  }


}
