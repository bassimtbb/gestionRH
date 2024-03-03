import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTravailSupComponent } from './d-travail-sup.component';

describe('DTravailSupComponent', () => {
  let component: DTravailSupComponent;
  let fixture: ComponentFixture<DTravailSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DTravailSupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DTravailSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
