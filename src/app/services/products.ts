// src/app/services/products.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);
  private readonly url = 'assets/products.json';

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getById(id: number): Observable<Product | undefined> {
    return this.getAll().pipe(map(list => list.find(p => p.id === id)));
  }
}

