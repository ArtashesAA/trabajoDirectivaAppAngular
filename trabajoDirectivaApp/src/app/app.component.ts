import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje ="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas:any[];

  constructor(){
    this.entradas=[
      {titulo:"Python cada dia más presente."},
      {titulo:"Java presente desde hace 20 años."},
      {titulo:"Javascript más util."},
    ]
  }

  registrarUsuario(){
    this.registrado=true;
    this.mensaje=" se ha registrado."
  }
}
