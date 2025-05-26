import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Mercancia } from 'src/app/shared/models/mercancia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercanciaService {
  private apiUrl = 'http://localhost:8080/api/mercancias';

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Mercancia[]> {
    return this.http.get<Mercancia[]>(this.apiUrl);
  }

  getById(id: number): Observable<Mercancia> {
    return this.http.get<Mercancia>(`${this.apiUrl}/${id}`);
  }

  guardar(mercancia: Mercancia): Observable<Mercancia> {
    return this.http.post<Mercancia>(this.apiUrl, mercancia);
  }

  editar(mercancia: Mercancia): Observable<Mercancia> {
    return this.http.put<Mercancia>(this.apiUrl, mercancia);
  }

  buscarConFiltros(nombre?: string, fechaIngreso?: string, usuarioId?: number): Observable<Mercancia[]> {
    let params = new HttpParams();
    if (nombre) params = params.set('nombre', nombre);
    if (fechaIngreso) params = params.set('fechaIngreso', fechaIngreso);
    if (usuarioId) params = params.set('usuarioId', usuarioId.toString());

    return this.http.get<Mercancia[]>(`${this.apiUrl}/filtros`, { params });
  }

  eliminar(id: number, idUsouario: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/${idUsouario}`);
  }
}
