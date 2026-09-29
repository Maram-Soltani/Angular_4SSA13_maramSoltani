import { Component, signal } from '@angular/core';
import { Product } from '../models/product';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  message = signal('Bienvenue dans Home 👋');
  title = signal('Liste des produits');
  color = signal('red');
  searchProduct = signal('');

  changerMessage() {
    this.message.set('Bonjour Maram ! 🎉');
  }

  save() {
    alert('Hello');
  }

  increment(id: number) {
    this.products.update((list) =>
      list.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)),
    );
  }
  decrement(id: number) {
    this.products.update((list) =>
      list.map((p) => (p.id === id ? { ...p, likes: p.likes - 1 } : p)),
    );
  }
  buy(id: number) {
    this.products.update((list) =>
      list.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 5 } : p)),
    );
  }
  products = signal<Product[]>([
    { id: 1, name: 'iphone16', price: 3000, quantity: 5, likes: 0 },
    { id: 2, name: 'laptop', price: 20000, quantity: 3, likes: 0 },
    { id: 3, name: 'tablet', price: 15000, quantity: 2, likes: 0 },
  ]);

  Searchbyname() {
    return this.products().filter((p) =>
      p.name.toLowerCase().includes(this.searchProduct().toLowerCase()),
    );
  }
}
