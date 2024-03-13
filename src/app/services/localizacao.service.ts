import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localizacao } from '../models/localizacao.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService {

  private baseUrl = 'http://localhost:8080/localizacoes';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Localizacao[]> {
    return this.httpClient.get<Localizacao[]>(this.baseUrl)
  }

  findById(id: string): Observable<Localizacao> {
    return this.httpClient.get<Localizacao>(`${this.baseUrl}/${id}`)
  }

  insert(localizacao: Localizacao): Observable<Localizacao>{
    const data = {
      cidade: localizacao.cidade,
      estado: localizacao.estado,
      idFornecedor: localizacao.fornecedor.id,
    }
    return this.httpClient.post<Localizacao>(this.baseUrl, data);
  }

  update(localizacao: Localizacao): Observable<Localizacao>{
    const data = {
      cidade: localizacao.cidade,
      estado: localizacao.estado,
      idEstado: localizacao.fornecedor.id,
    }
    return this.httpClient.put<Localizacao>(`${this.baseUrl}/${localizacao.id}`, data);
  }

  delete(localizacao: Localizacao): Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}/${localizacao.id}`);
  }
}
