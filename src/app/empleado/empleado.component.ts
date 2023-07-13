import { Component } from "@angular/core";  
import { Empleado } from "./empleado";

@Component({
    selector: 'empleado'
   ,templateUrl: './empleado.component.html' 
})
export class EmpleadoComponent{
    public name = 'Title of the Empleado component';
    public empleado!: Empleado;
    public trabajadores:Array<Empleado>;
    public externo:boolean;
    public color:string;
    public selected_color:string;

    /**
     *
     */
    constructor() {
        this.empleado = new Empleado('David Lopez', 45, 'Constructor', true);
        this.trabajadores = [
            new Empleado('Manolo Mtz', 45, 'Adminvo', true),
            new Empleado('Anna Lopez', 35, 'Cocinera', true),
            new Empleado('Vic Lopez', 67, 'Engineer', false),
        ] 
        
        this.externo = true;
        this.color = 'yellow';
        this.selected_color = "#CCC"
    }

    ngOnInit(){
        
        console.log(this.empleado);
    }

    changeExterno(value:boolean){
        this.externo = value;
    }
}