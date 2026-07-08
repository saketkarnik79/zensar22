import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleDemo } from './ng-style-demo';

describe('NgStyleDemo', () => {
  let component: NgStyleDemo;
  let fixture: ComponentFixture<NgStyleDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyleDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(NgStyleDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
