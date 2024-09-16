import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage {
  username: string = '';
  password: string = '';

  login() {
    console.log('Iniciar sesión con:', this.username, this.password);
  }
}
