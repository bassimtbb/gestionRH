import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdpOComponent } from './mdp-o.component';

describe('MdpOComponent', () => {
  let component: MdpOComponent;
  let fixture: ComponentFixture<MdpOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdpOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MdpOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
