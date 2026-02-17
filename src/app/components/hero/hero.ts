import { Component, OnInit, signal } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-hero',
  imports: [],
  animations: [
    trigger('pageLoad', [
      transition(':enter', [
        // Initial state for the whole section
        query('.reveal-item', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', 
            style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('imageReveal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8) rotate(5deg)' }),
        animate('1000ms 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
        style({ opacity: 1, transform: 'scale(1) rotate(0)' }))
      ])
    ])
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  typedText = signal('');
  fullText = 'Front End Developer'; 
  
  ngOnInit() {
    this.typeEffect();

  }
 

  typeEffect() {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= this.fullText.length) {
        this.typedText.set(this.fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Speed of typing in milliseconds
  }

}
