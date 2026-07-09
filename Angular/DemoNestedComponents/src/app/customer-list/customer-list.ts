import { Component, signal } from '@angular/core';
import { Customer } from '../models/Customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  title=signal('List of Customers');
  customers: Customer[] = [
    { customerNo: 1, name: 'John Doe', address: '123 Main St', city: 'Anytown', state: 'CA', country: 'USA' },
    { customerNo: 2, name: 'Jane Smith', address: '456 Elm St', city: 'Othertown', state: 'NY', country: 'USA' },
    { customerNo: 3, name: 'Bob Johnson', address: '789 Oak St', city: 'Sometown', state: 'TX', country: 'USA' },
    { customerNo: 4, name: 'Alice Brown', address: '321 Pine St', city: 'Anycity', state: 'FL', country: 'USA' },
    { customerNo: 5, name: 'Charlie Davis', address: '654 Maple St', city: 'Othercity', state: 'WA', country: 'USA' }
  ];
}
