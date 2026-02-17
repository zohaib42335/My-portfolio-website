import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, signal, viewChildren } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements AfterViewInit {
  skillCards = viewChildren<ElementRef>('skillCard');

  skills = signal([
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original colored' }
  ]);

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a slight delay for each icon to create a "staggered" entrance
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, (index % 4) * 100); 
        }
      });
    }, { threshold: 0.2 });

    this.skillCards().forEach(card => observer.observe(card.nativeElement));
  }
}