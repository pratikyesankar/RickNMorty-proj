import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharactersDataService {
  
url = "https://rickandmortyapi.com/api/character";

  constructor(private http:HttpClient) { }

  characters()
  {
    return this.http.get(this.url);
  }
}
