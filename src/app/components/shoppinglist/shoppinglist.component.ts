import { Component } from '@angular/core';

type Item = {
  name: string;
  price: number;
};

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css',
})
export class ShoppinglistComponent {
  items: Item[] = [
    { name: 'Hat', price: 50 },
    { name: 'Spoon', price: 100 },
    { name: 'Fork', price: 50 },
    { name: 'Shoe', price: 1500 },
    { name: 'Shirt', price: 500 },
    { name: 'Skirt', price: 550 },
    { name: 'Socks', price: 150 },
    { name: 'TV', price: 5000 },
    { name: 'PS5', price: 10000 },
    { name: 'SSD 1T', price: 999 },
  ];

  shoppingList: Item[] = [];

  addToCart(item: Item) {
    this.shoppingList.push(item);
  }

  removeFromCart(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
