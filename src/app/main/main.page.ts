import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [    CommonModule, FormsModule, RouterLink, IonicModule, HeaderComponent]
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
