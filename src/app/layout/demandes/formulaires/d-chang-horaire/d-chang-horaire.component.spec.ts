import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DChangHoraireComponent } from './d-chang-horaire.component';

describe('DChangHoraireComponent', () => {
  let component: DChangHoraireComponent;
  let fixture: ComponentFixture<DChangHoraireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DChangHoraireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DChangHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
