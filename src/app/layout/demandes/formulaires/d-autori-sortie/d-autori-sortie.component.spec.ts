import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAutoriSortieComponent } from './d-autori-sortie.component';

describe('DAutoriSortieComponent', () => {
  let component: DAutoriSortieComponent;
  let fixture: ComponentFixture<DAutoriSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DAutoriSortieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DAutoriSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
