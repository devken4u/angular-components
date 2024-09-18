import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvensumcalculatorComponent } from './evensumcalculator.component';

describe('EvensumcalculatorComponent', () => {
  let component: EvensumcalculatorComponent;
  let fixture: ComponentFixture<EvensumcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvensumcalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvensumcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
