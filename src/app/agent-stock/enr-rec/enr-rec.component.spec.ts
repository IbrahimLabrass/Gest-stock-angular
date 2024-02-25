import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrRecComponent } from './enr-rec.component';

describe('EnrRecComponent', () => {
  let component: EnrRecComponent;
  let fixture: ComponentFixture<EnrRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
