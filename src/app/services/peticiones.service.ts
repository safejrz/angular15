import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
 import {HttpClientModule} from '@angular/common/http';
 import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PeticionesService{
    constructor(
        
        ) { }

    getPrueba(){
        return 'Hola mundo desde el servicio.'
    }
}