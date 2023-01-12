import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreUpper:string ='julio';
  nombreLower:string ='JULIO';
  nombreCompleto:string ='julio cesar LandazUry';
  
  fecha:Date = new Date(); //dia de hoy
  
}
