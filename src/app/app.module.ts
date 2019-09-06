import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTES } from './app.routes';


//Modulos personalizados
import { PagesModule } from './pages/pages.module';


//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
        declarations: [
          AppComponent,
          LoginComponent,
          RegisterComponent,
        ],

        imports: [
          BrowserModule,
          APP_ROUTES,
          PagesModule // todos los modulos van en imports
        ],

        providers: [],
        bootstrap: [AppComponent]
})


export class AppModule { }
