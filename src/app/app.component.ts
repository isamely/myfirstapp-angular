import { Component } from '@angular/core';
import { getSymbolIterator } from '../../node_modules/@angular/core/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 users = ['melisa', 'predro', 'juan', 'john', 'raul'];
 active = true;
 name: string = 'Melisa Bermudez';
 age: number;
 adress: {
   street: string;
   city: string;
 };
 hobbies: string[];

 constructor() {
   this.age = 28;
   this.adress = {
     street: 'Rivadavia 68',
     city: 'Buenos Aires',
   };
   this.hobbies = ['gym', 'montar en bici', 'ver tele'];
 }

 miembros: string[] = ['pedro', 'lucas', 'juan']; 
 
  sayHello () {
      alert('Bienvenido!');
  }    
  borrar(miembro){
    //busco el usuario que quiero eliminar y lo quito
    for(let i = 0; i < this.miembros.length; i++) {
      if(miembro == this.miembros[i]) {
        this.miembros.splice(i, 1);
      }
    }
  }
}
