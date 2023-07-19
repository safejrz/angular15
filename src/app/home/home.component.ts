import { Component } from "@angular/core";
import { RopaService } from "../services/ropa.service";
import { ConversorPipe } from "../pipes/conversor.pipe";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]

})
export class HomeComponent{
    public titulo = "Pagina principal";
    //public conversor:ConversorPipe;

    /**
     *
     */
    constructor(private _ropaservice: RopaService) 
    {}

    ngOnInit(){
        console.log(this._ropaservice.prueba('Camiseta Nike'));
    }
}