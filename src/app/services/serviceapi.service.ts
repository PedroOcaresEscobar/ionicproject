import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interface/character';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {
  private url: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<{ results: Character[] }> {
    return this.http.get<{ results: Character[] }>(this.url);
  }
}