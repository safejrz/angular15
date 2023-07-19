import { NgModule } from '@angular/core';
//import { ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CocheComponent } from './coche/coche.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'pagina-principal', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'contacto/:page', component: ContactoComponent},
  {path: 'coche', component:CocheComponent},
  {path: 'plantillas', component: PlantillasComponent},
  {path: '**', component: HomeComponent}
];

 export const appRoutingProviders: any[] = [];
// export const routing:ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
