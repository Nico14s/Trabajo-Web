import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre: string=""
  apellido: string=""

  constructor(public alerta:AlertController, private router:Router) { }

  ngOnInit() {
  }

  async MensajeError(){
    const alert = await this.alerta.create({
      header: 'Error de inicio',
      message:'Los campos no pueden estar vacios',
      buttons:['Aceptar']
    });
    await alert.present();  
  }

  Ingresar(){
    if(this.nombre ==="" || this.apellido ===""){
      console.log("No puede haber valores vacios")
      this.MensajeError()
    }
    else{
      console.log("Inicio se sesion correcto")
      this.router.navigate(["/login"])
    }
  }
}
