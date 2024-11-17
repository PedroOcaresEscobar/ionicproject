import { Component } from '@angular/core';
import { ServiceapiService } from '../services/serviceapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  characters:any


  constructor(
    private serviceapi: ServiceapiService
  ) {}
  ngOnInit(){
    this.serviceapi.getCharacters().subscribe(
      (data:any) => {
        this.characters = data.results;
        
      }
    )
  }

}
