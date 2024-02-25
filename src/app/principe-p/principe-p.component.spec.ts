import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipePComponent } from './principe-p.component';

describe('PrincipePComponent', () => {
  let component: PrincipePComponent;
  let fixture: ComponentFixture<PrincipePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
