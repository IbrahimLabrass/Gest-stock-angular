import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentStockComponent } from './agent-stock.component';

describe('AgentStockComponent', () => {
  let component: AgentStockComponent;
  let fixture: ComponentFixture<AgentStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
