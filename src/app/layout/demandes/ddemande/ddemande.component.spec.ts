import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdemandeComponent } from './ddemande.component';

describe('DdemandeComponent', () => {
  let component: DdemandeComponent;
  let fixture: ComponentFixture<DdemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
