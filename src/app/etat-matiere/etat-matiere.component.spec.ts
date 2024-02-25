import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatMatiereComponent } from './etat-matiere.component';

describe('EtatMatiereComponent', () => {
  let component: EtatMatiereComponent;
  let fixture: ComponentFixture<EtatMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatMatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
