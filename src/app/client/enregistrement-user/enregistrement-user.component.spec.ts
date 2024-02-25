import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementUserComponent } from './enregistrement-user.component';

describe('EnregistrementUserComponent', () => {
  let component: EnregistrementUserComponent;
  let fixture: ComponentFixture<EnregistrementUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnregistrementUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrementUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
