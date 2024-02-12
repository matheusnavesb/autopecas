import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../models/estado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private baseUrl = 'http://localhost:8080/estados';

  constructor(private httpClient: HttpClient) { }

  getEstados(): Observable<Estado[]> {
    return this.httpClient.get<Estado[]>(this.baseUrl)
  }
}
