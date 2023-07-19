import { Component } from "@angular/core";
import { Coche } from "./coche";
import { PeticionesService } from "../services/peticiones.service";

@Component({
    selector: 'coche',
    templateUrl: './coche.component.html',
    providers: [PeticionesService],
})
export class CocheComponent{
public coche: Coche;
public coches:Array<Coche>;

constructor(
   private _peticionesService: PeticionesService
    ) {
    this.coche = new Coche("","","");
    this.coches = [
        new Coche("Seat Panda", "120", "Blanco"),
        new Coche("Renault Clio", "110", "Azul"),
        
    ]
    }

    ngOnInit(){
        console.log(this._peticionesService.getPrueba());
    }

    onSubmit(){
        console.log(this.coche);
    }
}