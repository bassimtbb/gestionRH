import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAutoriTeleTrComponent } from './d-autori-tele-tr.component';

describe('DAutoriTeleTrComponent', () => {
  let component: DAutoriTeleTrComponent;
  let fixture: ComponentFixture<DAutoriTeleTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DAutoriTeleTrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DAutoriTeleTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
