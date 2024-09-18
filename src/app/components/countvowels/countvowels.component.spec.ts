import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountvowelsComponent } from './countvowels.component';

describe('CountvowelsComponent', () => {
  let component: CountvowelsComponent;
  let fixture: ComponentFixture<CountvowelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountvowelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountvowelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
