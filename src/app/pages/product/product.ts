import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService, Product } from '../../services/products';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export default class ProductComponent implements OnInit {
  private route = inject(ActivatedRoute);     // ➕ juste pour lire l’ID de l’URL
  private svc = inject(ProductsService);      // ➕ on réutilise ton service
  product?: Product;                           // ➕ le produit affiché

  ngOnInit(): void {                           // ➕ chargement minimal
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getById(id).subscribe(p => this.product = p);
  }
}
