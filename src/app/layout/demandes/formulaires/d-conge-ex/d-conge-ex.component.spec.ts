import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCongeExComponent } from './d-conge-ex.component';

describe('DCongeExComponent', () => {
  let component: DCongeExComponent;
  let fixture: ComponentFixture<DCongeExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DCongeExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DCongeExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
