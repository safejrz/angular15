import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
})
export class FrutaComponent {
public name_component = 'Fruit component'
public fruit_list = 'Naranja, Manzana, Pera y Sandia'
//  public nombre:string = "Victor Robles";
// public edad:number = 35;
// public mayorDeEdad:boolean = true;
// public trabajos:Array<any> = ['carpenter', 44, 'Stone mason'];
// comodin:any = 'Cualquier Cosa';

/**
 *
 */
constructor() {

  //this.holaMundo();
}

ngOnInit(){
  
}

// holaMundo(){
//   alert("hola" + this.nombre);
// }
}
