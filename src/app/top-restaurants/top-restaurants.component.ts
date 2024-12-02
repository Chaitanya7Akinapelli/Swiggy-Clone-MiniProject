import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-top-restaurants',
  standalone: true,
  imports: [NgFor],
  templateUrl: './top-restaurants.component.html',
  styleUrls: ['./top-restaurants.component.css'],
})
export class TopRestaurantsComponent {
  restaurants = [
    { img: './assets/restaurants/pizza-hut.avif', name: 'Pizza Hut', rating: '4.1', time: '25-30 mins', cuisine: 'Pizzas', location: 'Kothawada', offer: 'ITEMS AT ₹189' },
    { img: './assets/restaurants/kfc.avif', name: 'KFC', rating: '4.2', time: '25-30 mins', cuisine: 'Burgers, Fast Food', location: 'Hanamkonda', offer: '20% OFF UPTO ₹50' },
    { img: './assets/restaurants/dominos-pizza.avif', name: "Domino's Pizza", rating: '4.4', time: '20-25 mins', cuisine: 'Pizzas, Italian', location: 'Sherpura', offer: '₹125 OFF ABOVE ₹1199' },
    { img: './assets/restaurants/belgian-waffle.avif', name: 'The Belgian Waffle Co.', rating: '4.6', time: '40-45 mins', cuisine: 'Waffle, Desserts', location: 'Hanamkonda', offer: '20% OFF UPTO ₹50' },
  ] 
}
