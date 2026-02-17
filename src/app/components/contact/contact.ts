import { trigger, transition, query, style, animate, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
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
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulating an API call (e.g., to EmailJS or Firebase)
      console.log('Form Data:', this.contactForm.value);
      
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => this.submitSuccess = false, 5000);
      }, 2000);
    }
  }
}
