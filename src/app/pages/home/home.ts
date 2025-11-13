import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from '../../pipes/filter-by-name-pipe';
import { SortByPricePipe } from '../../pipes/sort-by-price-pipe';
import { ProductsService, Product } from '../../services/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, FilterByNamePipe, SortByPricePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export default class HomeComponent implements OnInit {
  private svc = inject(ProductsService);
  products: Product[] = [];

  // ajout pour la recherche et le tri
  searchTerm = '';
  sortOrder: 'asc' | 'desc' | '' = '';

  ngOnInit(): void {
    this.svc.getAll().subscribe({
      next: data => {
        console.log('products.json →', data);
        this.products = data;
      },
      error: err => console.error('Erreur chargement products.json', err)
    });
  }
}
