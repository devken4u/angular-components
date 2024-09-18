import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaofcircleComponent } from './areaofcircle.component';

describe('AreaofcircleComponent', () => {
  let component: AreaofcircleComponent;
  let fixture: ComponentFixture<AreaofcircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaofcircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaofcircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
