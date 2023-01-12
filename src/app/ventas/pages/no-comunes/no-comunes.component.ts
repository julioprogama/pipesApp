import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap} from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string='julio';
  genero: string= 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino':  'invitarla'
  };
  
  //i18nPlural
  clientes:string[] = ['julio','jaime', 'camilo'];

  clienteMap = { 
    '=0': 'ningún cliente',
    '=1': 'un cliente',
    'other': ' # clientes',
   };

   cambiarCliente(){
    if (this.genero == 'masculino' ){
      this.genero = 'femenino';
      this.nombre = 'eliana';
    } else {
      this.genero = 'masculino';
      this.nombre = 'Julio';
    }
   }

   borrarCliente(){
    this.clientes.splice(0, 1);
   }
  
   //KeyValue Pipe
   persona = {
      nombre : 'julio',
      edad : 29,
      direccion: 'cali, colombia'
   }

  //Json pipe
   object = [{foo: 'bar', baz: 'qux', 
              nested: [ 
                { xyz: 3, numbers: [1, 2, 3, 4, 5]}]
              }
            ];

   //Async Pipe
  miObservable = interval(3500).pipe( tap( () => console.log( 'intervalo') ) );


  valorpromesa = new Promise((resolve, reject)  =>{
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
