import { Injectable } from "@angular/core";

@Injectable()
export class RopaService{
 
public nombre_prenda:string = 'jeans';

    prueba(nombre_prenda:string){
        return nombre_prenda; //this.nombre_prenda;
    }
}