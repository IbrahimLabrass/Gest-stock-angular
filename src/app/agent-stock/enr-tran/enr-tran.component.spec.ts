import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrTranComponent } from './enr-tran.component';

describe('EnrTranComponent', () => {
  let component: EnrTranComponent;
  let fixture: ComponentFixture<EnrTranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrTranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
