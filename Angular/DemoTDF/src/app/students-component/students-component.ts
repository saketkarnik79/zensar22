import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './students-component.html',
  styleUrl: './students-component.css',
})
export class StudentsComponent {
  // studentName: string = '';
  student = {
    id: 0,
    name: '',
    course: '',
  }

  registerStudent() {
    console.log(`Student registered: ${JSON.stringify(this.student)}`);
  }
}
