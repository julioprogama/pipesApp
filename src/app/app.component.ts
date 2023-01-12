import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipesApp';

  constructor(private primeNGConfig: PrimeNGConfig){  }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
    
  }
  
}
