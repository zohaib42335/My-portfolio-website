import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, signal, viewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit,OnDestroy {
  projectRows = viewChildren<ElementRef>('projectRow');

  /* ── Data ── */
  projects = signal([
    {
      title: 'E-Commerce Profit Tracker',
      category: 'Personal Project',
      date: 'January 2026',
      description:
        'Business analytics dashboard for e-commerce sellers to calculate profitability metrics, track ROAS, and monitor inventory costs in real time.',
      image: 'assets/images/project_1.jpg',
      tags: ['Angular', 'Chart.js', 'Typescript', 'Bootstrap 5'],
      links: {
        github: 'https://github.com/zohaib42335/profit-tracker',
        live:   'https://profit-tracker-app.netlify.app/'
      }
    },
    {
      title: 'Freelancer Dashboard',
      category: 'Personal Project',
      date: 'January 2026',
      description:
        'Productivity and analytics dashboard for freelancers to manage clients, track invoices, visualize earnings, and measure project timelines.',
      image: 'assets/images/project_2.jpg',
      tags: ['Angular', 'Bootstrap 5', 'TypeScript', 'Chart.js'],
      links: {
        github: 'https://github.com/zohaib42335/freelance-admin-dashboard',
        live:   'https://feelanceos-dashboard.netlify.app'
      }
    },
    {
      title: 'Resume Builder',
      category: 'Personal Project',
      date: 'November 2025',
      description:
        'Real-time resume builder with live preview functionality, drag-and-drop sections, multiple export formats, and customizable themes.',
      image: 'assets/images/project_3.jpg',
      tags: ['Angular', 'Typescript', 'Bootstrap'],
      links: {
        github: 'https://github.com/zohaib42335/resume-builder',
        live:   'https://smart-resume-builder-web.netlify.app/'
      }
    }
  ]);

  /* ── Scroll Observer ── */
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset['delay'] ?? 0);
            setTimeout(() => el.classList.add('is-visible'), delay);
          }
        });
      },
      { threshold: 0.18 }
    );

    this.projectRows().forEach((row, i) => {
      const el = row.nativeElement as HTMLElement;
      el.dataset['delay'] = String(i * 80);
      this.observer.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
