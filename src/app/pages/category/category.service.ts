import { Injectable } from '@angular/core'
import { ApiService } from 'src/app/core/services/api.service'
import { Observable } from 'rxjs'
import { shareReplay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private service: ApiService) {}

  /**
   * Carrega todos as categorias
   */
  getAll(): Observable<any> {
    return this.service.get('categoria').pipe(shareReplay())
  }

  /**
   * Carrega categoria específica
   */
  get(id: string): Observable<any> {
    return this.service.get(`categoria/${id}`)
  }

  /**
   * Cria nova categoria
   */
  post(data: object): Observable<any> {
    return this.service.post('categoria', data)
  }

  /**
   * Atualiza categoria
   */
  put(data: object): Observable<any> {
    return this.service.put('categoria', data)
  }
}
