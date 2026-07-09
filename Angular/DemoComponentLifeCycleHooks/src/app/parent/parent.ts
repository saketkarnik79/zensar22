import { Component } from '@angular/core';
import { Child } from '../child/child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [Child, CommonModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  studentName: string = 'John Doe';

  showChild: boolean = true;

  changeStudentName() {
    this.studentName = `Student ${Math.floor(Math.random() * 100)}`;
  }

  destroyComponent(){
    this.showChild = !this.showChild;
  }
}
