import { trigger, transition, query, style, animate, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
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
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      try {
        // 2. The real EmailJS call
        await emailjs.send(
          'service_5iujlyx',   
          'template_rirtl4f',  
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
            subject: this.contactForm.value.subject,
            message: this.contactForm.value.message,
          },
          'DKEHUlXEL2guqKK4p'    
        );

        this.submitSuccess = true;
        this.contactForm.reset();
      } catch (error) {
        console.error('FAILED...', error);
        alert('Something went wrong. Please try again later.');
      } finally {
        this.isSubmitting = false;
        setTimeout(() => (this.submitSuccess = false), 5000);
      }
    }
  }

}
