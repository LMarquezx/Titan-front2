import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getMedicamentos(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'/medicamentos');
  }

  agregarMedicamento(medicamento:any):Observable<any>{
    return this.http.post<any>(this.apiUrl+'/medicamentos/create',medicamento);
  }
}