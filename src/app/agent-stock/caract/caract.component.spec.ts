import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractComponent } from './caract.component';

describe('CaractComponent', () => {
  let component: CaractComponent;
  let fixture: ComponentFixture<CaractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
