import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/products';

@Pipe({ name: 'filterByName', standalone: true })
export class FilterByNamePipe implements PipeTransform {
  transform(list: Product[], term: string = ''): Product[] {
    if (!list || !term?.trim()) return list || [];
    const t = term.toLowerCase();
    return list.filter(p => p.name.toLowerCase().includes(t));
  }
}
