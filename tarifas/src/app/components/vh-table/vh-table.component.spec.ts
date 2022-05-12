import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhTableComponent } from './vh-table.component';

describe('VhTableComponent', () => {
  let component: VhTableComponent;
  let fixture: ComponentFixture<VhTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
