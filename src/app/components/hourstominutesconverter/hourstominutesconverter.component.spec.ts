import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourstominutesconverterComponent } from './hourstominutesconverter.component';

describe('HourstominutesconverterComponent', () => {
  let component: HourstominutesconverterComponent;
  let fixture: ComponentFixture<HourstominutesconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourstominutesconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourstominutesconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
