import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, signal, viewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {
  projectRows = viewChildren<ElementRef>('projectRow');
 projects = signal([
    {
      title: 'E-Commerce Profit Tracker',
      category: 'Personal Project',
      date: 'January 2026',
      description: 'Business analytics dashboard for e-commerce sellers to calculate profitability metrics....',
      image: 'assets/images/project_1.jpg',
      links: { github: 'https://github.com/zohaib42335/profit-tracker', live: 'https://profit-tracker-app.netlify.app/' }
    },
    {
      title: 'Freelancer Dashboard',
      category: 'Personal Project',
      date: 'January 2026',
      description: 'Productivity and analytics dashboard for freelancers....',
      image: 'assets/images/project_2.jpg',
      links: { github: 'https://github.com/zohaib42335/freelance-admin-dashboard', live: 'https://feelanceos-dashboard.netlify.app' }
    },
    {
      title: 'Resume Builder',
      category: 'Personal',
      date: 'November 2025',
      description: 'Real-time resume builder with live preview functionality....',
      image: 'assets/images/project_3.jpg',
      links: { github: 'https://github.com/zohaib42335/resume-builder', live: 'https://smart-resume-builder-web.netlify.app/' }
    },

  ]);

      ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.2 });

    this.projectRows().forEach(row => observer.observe(row.nativeElement));
  }

}
