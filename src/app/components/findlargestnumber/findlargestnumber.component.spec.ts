import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindlargestnumberComponent } from './findlargestnumber.component';

describe('FindlargestnumberComponent', () => {
  let component: FindlargestnumberComponent;
  let fixture: ComponentFixture<FindlargestnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindlargestnumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindlargestnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
