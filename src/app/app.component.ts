import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje : string;
  subtitulo: string;
  fecha: Date;
  visitas:number;
  color:string = 'red';
  
  constructor() {
    this.mensaje = 'Bienvenido a Angular';
    this.subtitulo = 'El mejor framework de frond End';
    this.fecha = new Date();
    this.visitas = 100;
 

    setInterval(()=>{
      this.visitas++;
    },3000);

  }
}
