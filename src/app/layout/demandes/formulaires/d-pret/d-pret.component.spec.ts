import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPretComponent } from './d-pret.component';

describe('DPretComponent', () => {
  let component: DPretComponent;
  let fixture: ComponentFixture<DPretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DPretComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
