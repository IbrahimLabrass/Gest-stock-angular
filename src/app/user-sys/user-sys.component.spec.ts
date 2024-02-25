import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSysComponent } from './user-sys.component';

describe('UserSysComponent', () => {
  let component: UserSysComponent;
  let fixture: ComponentFixture<UserSysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
