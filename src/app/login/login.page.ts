import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  password: string=""
  confirmPassword: string=""
  passwordForm: FormGroup;

  constructor(public alerta:AlertController,public toast:ToastController, private router:Router, private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const formValues = this.passwordForm.value;
    if (formValues.password === formValues.confirmPassword) {
      console.log('Contraseñas coinciden')
      this.router.navigate(["/products"])
    } else {
      console.log('Las contraseñas no coinciden')
      this.MensajeErrorContraseña();
    }
  }

  ngOnInit() {
  }

  async MensajeErrorContraseña(){
    const alert = await this.alerta.create({
      header: 'Error de inicio',
      message:'Las contraseñas no coinciden',
      buttons:['Aceptar']
    });
    await alert.present();
  }
}
