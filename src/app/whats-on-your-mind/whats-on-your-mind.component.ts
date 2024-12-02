import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-whats-on-your-mind',
  standalone: true,
  imports: [FormsModule, NgFor,CommonModule],
  templateUrl: './whats-on-your-mind.component.html',
  styleUrls: ['./whats-on-your-mind.component.css']
})
export class WhatsOnYourMindComponent {

  constructor(private router: Router) {}

    foods = [
      { img: './assets/whats-on-your-mind/idli.avif', name: 'idli' },
      { img: './assets/whats-on-your-mind/dosa.avif',name: 'dosa' },
      { img: './assets/whats-on-your-mind/biryani.avif' ,name: 'biryani'},
      { img: './assets/whats-on-your-mind/vada.avif' ,name: 'vada'},
      { img: './assets/whats-on-your-mind/parotta.avif' ,name: 'parotta'},
      { img: './assets/whats-on-your-mind/pizza.avif' ,name: 'pizza'},
      { img: './assets/whats-on-your-mind/ice-cream.avif' ,name:'ice cream'},
      { img: './assets/whats-on-your-mind/shawarma.avif' ,name:'Shawarma'},
      { img: './assets/whats-on-your-mind/shake.avif',name:'Shake' },
      { img: './assets/whats-on-your-mind/cakes.avif' ,name:'Cakes'},
      { img: './assets/whats-on-your-mind/pure veg.avif',name:'Pure veg' },
      { img: './assets/whats-on-your-mind/rasmalai.avif',name:'Rasmalai' },
      { img: './assets/whats-on-your-mind/gulab jamun.avif',name:'Gulab Jamun'},
      { img: './assets/whats-on-your-mind/noodles.avif' ,name:'Noodles'},
      { img: './assets/whats-on-your-mind/burgers.avif',name:'Burgers' },
      { img: './assets/whats-on-your-mind/paratha.avif',name:'Paratha' },
      { img: './assets/whats-on-your-mind/pastry.avif',name:'Pastry' },
      { img: './assets/whats-on-your-mind/kebabs.avif',name:'Kebabs' },
      { img: './assets/whats-on-your-mind/khichidi.avif',name:'Khichidi' },
      { img: './assets/whats-on-your-mind/salad.avif',name:'Salad' }
    ];
  
    currentIndex = 0;
    itemsToShow = 7;
  
    onclickPrev() {
      if (this.currentIndex - this.itemsToShow >= 0) {
        this.currentIndex -= this.itemsToShow;
      }
    }
  
    onclickNext() {
      if (this.currentIndex + this.itemsToShow < this.foods.length) {
        this.currentIndex += this.itemsToShow;
      }
    }
  
    canGoNext(): boolean {
      return this.currentIndex + this.itemsToShow < this.foods.length;
    }
  
    canGoPrev(): boolean {
      return this.currentIndex > 0;
    }
    goToFoodItems(name: string)
    {
      this.router.navigate([`/food/${name}`]);
    }
  }