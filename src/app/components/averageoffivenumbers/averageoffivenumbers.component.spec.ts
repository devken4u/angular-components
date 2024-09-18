import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageoffivenumbersComponent } from './averageoffivenumbers.component';

describe('AverageoffivenumbersComponent', () => {
  let component: AverageoffivenumbersComponent;
  let fixture: ComponentFixture<AverageoffivenumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AverageoffivenumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageoffivenumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
