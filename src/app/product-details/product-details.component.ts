import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // まず、現在のrouteからProductIdを取得する
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('puroductId')); // TODO: なんでproductIdって名前になってる？ => pathで設定したからだ

    // routeから提供されたIDから対応するProductを探す
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
