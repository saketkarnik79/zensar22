import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveDemo } from './custom-directive-demo';

describe('CustomDirectiveDemo', () => {
  let component: CustomDirectiveDemo;
  let fixture: ComponentFixture<CustomDirectiveDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDirectiveDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomDirectiveDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
