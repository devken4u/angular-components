import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizewordComponent } from './capitalizeword.component';

describe('CapitalizewordComponent', () => {
  let component: CapitalizewordComponent;
  let fixture: ComponentFixture<CapitalizewordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalizewordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalizewordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
