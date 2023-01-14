import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], ordenarPor:string = 'sin valor'  ): Heroe[] {
  
    switch(ordenarPor) {
      
      case 'nombre' :
        return value.sort((a,b) => (a.nombre > b.nombre ) ? 1: -1);

      case 'vuela' :
        return value.sort((a,b) => (a.vuela > b.vuela ) ? -1: 1);

      case 'color' : 
        return value.sort((a,b) => (a.color > b.color ) ? 1: -1);

      default: 
        return value;
    }
    
    
    /* if (ordenarPor === 'sin valor'){
      return value;
    }else if (ordenarPor === 'nombre'){  
      value = value.sort((a,b) => (a.nombre > b.nombre ) ? 1: -1);
    }else if (ordenarPor === 'vuela'){
      value = value.sort((a,b) => (a.vuela > b.vuela ) ? 1: -1);
    }else if (ordenarPor === 'color'){
      value = value.sort((a,b) => (a.color > b.color ) ? 1: -1);
    }

    return value; */
  }
}