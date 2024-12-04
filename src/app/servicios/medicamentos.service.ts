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

  eliminarMedicamento(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/medicamentos/${id}`);
}

editarMedicamento(medicamento: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/medicamentos/${medicamento.id}`, medicamento);
}
getMedicamentosSalidas(): Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl+'/medicamentos-salidas');
}

agregarMedicamentoSalidas(medicamento:any):Observable<any>{
  return this.http.post<any>(this.apiUrl+'/medicamentos-salidas/create',medicamento);
}

eliminarMedicamentoSalidas(id: string): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/medicamentos-salidas/${id}`);
}

editarMedicamentoSalidas(medicamento: any): Observable<any> {
return this.http.put<any>(`${this.apiUrl}/medicamentos-salidas/${medicamento.id}`, medicamento);
}
}
