import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { DataService } from '../../services';
import { ContactPerson } from '../../models';

interface EnquiryType {
  icon: string;
  title: string;
  description: string;
  email: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SectionHeaderComponent,
    ContactFormComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactPersons: ContactPerson[] = [];

  enquiryTypes: EnquiryType[] = [
    {
      icon: 'point_of_sale',
      title: 'Sales Enquiry',
      description: 'For product inquiries, quotations, and business development.',
      email: 'impacttechtool@gmail.com'
    },
    {
      icon: 'engineering',
      title: 'Technical Enquiry',
      description: 'For engineering specifications, design support, and technical queries.',
      email: 'ittdesignteam@gmail.com'
    },
    {
      icon: 'support_agent',
      title: 'General Enquiry',
      description: 'For any other questions about our company and services.',
      email: 'impacttechtool@gmail.com'
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.contactPersons = this.dataService.getContactPersons();
  }

  getEmails(): Array<{ label: string; address: string }> {
    return [
      { label: 'General & Sales', address: 'impacttechtool@gmail.com' },
      { label: 'Technical & Design', address: 'ittdesignteam@gmail.com' }
    ];
  }
}
