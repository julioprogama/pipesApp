import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit  {
  
  items : MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de angula',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Números',
            icon: 'pi pi-hashtag',
            routerLink:'numeros'
          },
          {
            label: 'Comunes',
            icon: 'pi pi-language',
            routerLink:'Full'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-at',
            routerLink:'no-comunes'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'        
      }
    ];
  }
}
