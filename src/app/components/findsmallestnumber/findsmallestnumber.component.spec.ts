import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindsmallestnumberComponent } from './findsmallestnumber.component';

describe('FindsmallestnumberComponent', () => {
  let component: FindsmallestnumberComponent;
  let fixture: ComponentFixture<FindsmallestnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindsmallestnumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindsmallestnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
