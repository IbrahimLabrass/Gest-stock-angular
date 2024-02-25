import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifComponent } from './identif.component';

describe('IdentifComponent', () => {
  let component: IdentifComponent;
  let fixture: ComponentFixture<IdentifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
