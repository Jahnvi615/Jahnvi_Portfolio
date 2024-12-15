import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  onSubmit() {
    alert('Thank you for your message! I will get back to you soon.');
  }
}
