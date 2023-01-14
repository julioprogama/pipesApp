import { NgModule } from '@angular/core';

//Primeng
import { ButtonModule       } from 'primeng/button';
import { CardModule         } from "primeng/card";
import { FieldsetModule     } from "primeng/fieldset";
import { MenubarModule      } from 'primeng/menubar';
import { TableModule        } from 'primeng/table';
import { ToolbarModule      } from 'primeng/toolbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SplitButtonModule  } from 'primeng/splitbutton';

@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    ToggleButtonModule,
    ToolbarModule,
    SplitButtonModule,
  ]
})
export class PrimeNgModule { }
