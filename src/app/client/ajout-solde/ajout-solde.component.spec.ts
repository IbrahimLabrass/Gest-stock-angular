import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSoldeComponent } from './ajout-solde.component';

describe('AjoutSoldeComponent', () => {
  let component: AjoutSoldeComponent;
  let fixture: ComponentFixture<AjoutSoldeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSoldeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSoldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
