import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' }) //providedIn: 'root' nos permite no tener que agregar en el modulo en providers y hace el service singleton
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krilin', power: 4000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 5000 },
  ];

  public addCharacter(character: Character): void {
    console.log(
      `Recibimos el character ${character.name} - ${character.power}`
    );

    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  /*
  public receiveIndexToDelete(index: number): void {
    this.characters.splice(index, 1);
  }
  */

  public deleteCharacterByUUID(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
