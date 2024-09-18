import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargestwordinsentenceComponent } from './largestwordinsentence.component';

describe('LargestwordinsentenceComponent', () => {
  let component: LargestwordinsentenceComponent;
  let fixture: ComponentFixture<LargestwordinsentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargestwordinsentenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargestwordinsentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
