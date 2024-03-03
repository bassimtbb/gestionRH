import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCongeComponent } from './d-conge.component';

describe('DCongeComponent', () => {
  let component: DCongeComponent;
  let fixture: ComponentFixture<DCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DCongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
