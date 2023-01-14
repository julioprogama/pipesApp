import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  enMayus:boolean = false;
  heroes: Heroe[] = [
    {
      nombre:'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Falcon',
      vuela: true,
      color: Color.amarillo
    },
    {
      nombre: 'Flecha verde',
      vuela: true,
      color: Color.verde
    }, 
  ]
  ordenPor:string = 'sin valor'
  
  filtro ( value: string = 'sin valor' ){
    this.ordenPor= value;
  }

  toggle(){
     this.enMayus = (this.enMayus) ? false: true;
  }


 
}
