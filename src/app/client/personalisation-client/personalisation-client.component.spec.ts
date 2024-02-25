import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalisationClientComponent } from './personalisation-client.component';

describe('PersonalisationClientComponent', () => {
  let component: PersonalisationClientComponent;
  let fixture: ComponentFixture<PersonalisationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalisationClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalisationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
