import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAutoriTraDimComponent } from './d-autori-tra-dim.component';

describe('DAutoriTraDimComponent', () => {
  let component: DAutoriTraDimComponent;
  let fixture: ComponentFixture<DAutoriTraDimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DAutoriTraDimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DAutoriTraDimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
