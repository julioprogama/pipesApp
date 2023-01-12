import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Modulo personalizado
import { SharedModule } from './shared/shared.module'; 
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar idoma de maneraglobal
import localEs from "@angular/common/locales/es-CO";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
