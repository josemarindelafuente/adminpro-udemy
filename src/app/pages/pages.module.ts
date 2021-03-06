import { NgModule } from "@angular/core";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule ({

    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
      ],

    exports: [   // porque deben ser accedidos desde otros componentes que no esten en este ambiente
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ], 
    imports: [
        SharedModule, // necesito los otros modulos que funcionan en estas paginas
        PAGES_ROUTES
    ]
    

})

export class PagesModule { }