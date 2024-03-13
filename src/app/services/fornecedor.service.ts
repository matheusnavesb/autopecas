import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fornecedor } from '../models/fornecedor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private baseUrl = 'http://localhost:8080/fornecedores';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Fornecedor[]> {
    return this.httpClient.get<Fornecedor[]>(this.baseUrl)
  }

  findById(id: string): Observable<Fornecedor> {
    return this.httpClient.get<Fornecedor>(`${this.baseUrl}/${id}`)
  }

  insert(fornecedor: Fornecedor): Observable<Fornecedor>{
    const data = {
      nome: fornecedor.nome,
      cnpj: fornecedor.cnpj,
      email: fornecedor.email,

    }
    return this.httpClient.post<Fornecedor>(this.baseUrl, data);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor>{
    const data = {
      nome: fornecedor.nome,
      email: fornecedor.email,

    }
    return this.httpClient.put<Fornecedor>(`${this.baseUrl}/${fornecedor.id}`, data);
  }

  delete(fornecedor: Fornecedor): Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}/${fornecedor.id}`);
  }
}
