import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre:string = 'Julio';
  mostrarNombre(){
      this.nombre= 'Camilo';
  }
  borrarNombre(){
    this.nombre='';
  }
}
