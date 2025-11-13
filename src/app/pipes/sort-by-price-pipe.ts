import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/products';

@Pipe({ name: 'sortByPrice', standalone: true })
export class SortByPricePipe implements PipeTransform {
  transform(list: Product[], order: 'asc' | 'desc' | '' = ''): Product[] {
    if (!list || !order) return list || [];
    const copy = [...list];
    return copy.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
  }
}
