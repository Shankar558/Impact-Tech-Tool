import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services';
import { EnquiryForm } from '../../models';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  enquiryForm!: FormGroup;
  isSubmitting = false;
  submitted = false;
  submitSuccess = false;

  serviceOptions = ['Stamping Tool', 'Jigs & Fixtures', 'Checking Gauges', 'Welding Fixtures', 'Prototype Parts', 'EDM Wire Cutting', 'Other'];
  industryOptions = ['Automotive', 'Aerospace', 'Electronics', 'Consumer Goods', 'Heavy Equipment', 'Medical Devices', 'Metal Fabrication', 'Other'];

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.serviceOptions = this.dataService.getServiceCategories();
    this.industryOptions = this.dataService.getIndustries();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.enquiryForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9+\\-\\s]{10,15}$')]],
      industry: ['', Validators.required],
      serviceRequired: ['', Validators.required],
      projectRequirement: [''],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  get f() {
    return this.enquiryForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const enquiryData: EnquiryForm = this.enquiryForm.value;
    console.log('Enquiry submitted:', enquiryData);

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.enquiryForm.reset();
      this.submitted = false;

      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }

  hasError(field: string): boolean {
    const control = this.enquiryForm.get(field);
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  getErrorMessage(field: string): string {
    const control = this.enquiryForm.get(field);
    if (!control) return '';

    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control.hasError('minlength')) {
      const minLength = control.errors?.['minlength']?.requiredLength;
      return `Minimum ${minLength} characters required`;
    }
    if (control.hasError('pattern')) {
      return 'Please enter a valid phone number';
    }
    return '';
  }
}
