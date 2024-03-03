import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAutoriSortieTemComponent } from './d-autori-sortie-tem.component';

describe('DAutoriSortieTemComponent', () => {
  let component: DAutoriSortieTemComponent;
  let fixture: ComponentFixture<DAutoriSortieTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DAutoriSortieTemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DAutoriSortieTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
