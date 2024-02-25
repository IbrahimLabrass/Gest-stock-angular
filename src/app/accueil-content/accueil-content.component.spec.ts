import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilContentComponent } from './accueil-content.component';

describe('AccueilContentComponent', () => {
  let component: AccueilContentComponent;
  let fixture: ComponentFixture<AccueilContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
