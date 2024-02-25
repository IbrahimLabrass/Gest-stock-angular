import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractTransfertComponent } from './caract-transfert.component';

describe('CaractTransfertComponent', () => {
  let component: CaractTransfertComponent;
  let fixture: ComponentFixture<CaractTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractTransfertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaractTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
