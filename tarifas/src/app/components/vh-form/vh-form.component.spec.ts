import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhFormComponent } from './vh-form.component';

describe('VhFormComponent', () => {
  let component: VhFormComponent;
  let fixture: ComponentFixture<VhFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
