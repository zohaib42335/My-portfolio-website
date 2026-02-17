import { trigger, transition, query, style, animate, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  animations: [
    trigger('aboutAnimation', [
      transition(':enter', [
        // Illustration slides in and bounces
        query('.about-illustration', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateX(0)' }))
        ]),
        // Staggered text reveal
        query('.reveal-text', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
