import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAcompteComponent } from './d-acompte.component';

describe('DAcompteComponent', () => {
  let component: DAcompteComponent;
  let fixture: ComponentFixture<DAcompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DAcompteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DAcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
