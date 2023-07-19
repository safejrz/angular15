import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CocheComponent } from './coche/coche.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

import { ConversorPipe } from './pipes/conversor.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CocheComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
