import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrDemandeComponent } from './enr-demande.component';

describe('EnrDemandeComponent', () => {
  let component: EnrDemandeComponent;
  let fixture: ComponentFixture<EnrDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
