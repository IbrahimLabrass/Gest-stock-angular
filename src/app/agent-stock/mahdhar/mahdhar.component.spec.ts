import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahdharComponent } from './mahdhar.component';

describe('MahdharComponent', () => {
  let component: MahdharComponent;
  let fixture: ComponentFixture<MahdharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahdharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahdharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
