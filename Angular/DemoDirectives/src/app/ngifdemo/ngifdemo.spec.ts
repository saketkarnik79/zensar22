import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngifdemo } from './ngifdemo';

describe('Ngifdemo', () => {
  let component: Ngifdemo;
  let fixture: ComponentFixture<Ngifdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngifdemo],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngifdemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
