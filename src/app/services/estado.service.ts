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

  findAll(): Observable<Estado[]> {
    return this.httpClient.get<Estado[]>(this.baseUrl)
  }

  findById(id: string): Observable<Estado> {
    return this.httpClient.get<Estado>(`${this.baseUrl}/${id}`)
  }

  insert(estado: Estado): Observable<Estado>{
    return this.httpClient.post<Estado>(`${this.baseUrl}/${estado.id}`, estado);
  }

  update(estado: Estado): Observable<Estado>{
    return this.httpClient.put<Estado>(`${this.baseUrl}/${estado.id}`, estado);
  }

  delete(estado: Estado): Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}/${estado.id}`);
  }
}
