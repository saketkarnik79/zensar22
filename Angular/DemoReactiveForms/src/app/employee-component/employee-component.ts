import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { noSpaceValidator } from '../validators/noSpaceValidator';

@Component({
  selector: 'app-employee-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4), noSpaceValidator]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.min(18), Validators.max(60)]],
      passwordGroup: this.fb.group({
        password: '',
        confirmPassword: ''
      }),
      address: this.fb.group({
        city: '',
        state: '',
        zipCode: ''
      }),
      skills: this.fb.array([
        this.fb.control('')
      ])
    });
    this.listenToChanges();
  }

  get skills(): FormArray {
    return this.employeeForm.get('skills') as FormArray;
  }

  addSkill(): void {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }
  
  listenToChanges(): void {
    this.employeeForm.valueChanges.subscribe(value => {
      console.log('Form Value Changed:', value);
    });
  }

  submitForm(): void {
    if (this.employeeForm.invalid){
      this.employeeForm.markAllAsTouched();
      return;
    }
    console.log(`Form Submitted: ${JSON.stringify(this.employeeForm.value)}`);
    alert(`Form Submitted: ${JSON.stringify(this.employeeForm.value)}`);
  }

  resetForm(): void {
    this.employeeForm.reset();
  }
}