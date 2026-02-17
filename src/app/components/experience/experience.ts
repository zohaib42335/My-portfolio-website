import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, signal, viewChildren } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements AfterViewInit {
  timelineItems = viewChildren<ElementRef>('timelineItem');

 experiences = signal([
    {
      company: 'AKSA SDS',
      role: 'Angular Developer Intern',
      period: 'Aug 2025 - Nov 2025',
      description: 'Developed responsive UI components using Angular and Bootstrap, enhancing user interface consistency. Gained real-world experience working on production-level projects, contributing to the software development lifecycle.',
      skills: ['Angular', 'TypeScript', 'Bootstrap']
    },
    {
      company: 'Elevvo Pathways',
      role: 'Frontend Developer (Intern)',
      period: 'Jun 2025 - July 2025',
      description: 'Converted UI designs into functional components, translating visual concepts into interactive elements.Collaborated with instructors and peers on assigned tasks, demonstrating teamwork and communication skills.',
      skills: ['HTML', 'CSS', 'Javascript','REACT','Bootstrap']
    },
    {
      company: 'Matgix Technologies',
      role: 'ERPNext Project Team Member',
      period: 'Jan 2022 - Sept 2022',
      description: 'Worked with enterprise ERPNext modules including Payroll, Stock, Attendance,and Finance.Assisted in system configuration, workflow setup, and data handling for business process automation.',
      skills: ['ERPNEXT', 'Data handling', 'Workflow setup']
    }
  ]);
      
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.2 });

    this.timelineItems().forEach(item => observer.observe(item.nativeElement));
  }
}
