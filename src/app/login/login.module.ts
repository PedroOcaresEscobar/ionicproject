import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Importa la página/componente de Login
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderComponent,
    RouterModule.forChild([{ path: '', component: LoginPage }]) 
    
  ],
  declarations: [LoginPage] // Declara el componente de Login
})
export class LoginModule { }
