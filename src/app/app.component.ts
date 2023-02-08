import { Component } from '@angular/core';
import { CharactersDataService } from './services/characters-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-RnM-project';
  characters: any;
  constructor(private characterData:CharactersDataService)
  {
    this.characterData.characters().subscribe((data)=>{
     console.warn("data",data);
  //  this.characters = data;
    })
  }
}
