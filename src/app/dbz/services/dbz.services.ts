import { Injectable } from '@angular/core';
import { v4  as uuid} from "uuid";




import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    // En esta variable lo que hace es que manda la información Character en una arreglo, con los campos que se declaro en la interfaces.
  characters: Character[] = [{
    id: uuid(),
    nombre: 'Krillin',
    poder: 100
  },
  {
    id: uuid(),
    nombre: 'Goku',
    poder: 9500
  },
  {
    id: uuid(),
    nombre: 'Vegeta',
    poder: 7500
  },
  {
    id: uuid(),
    nombre: 'Nombre de personajes',
    poder: 1
  }
];

onNewCharacter(character: Character):void{
  const newCharacter:Character={ id: uuid(), ...character}
  this.characters.push(newCharacter);
}

// onDeleteCharacter(idIndex:number){
//   this.characters.splice(idIndex, 1);
// }

deleteCharacterById(id:string){
 this.characters = this.characters.filter(character => character.id !== id)
}

}
