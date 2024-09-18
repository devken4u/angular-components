import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountconsonantsComponent } from './countconsonants.component';

describe('CountconsonantsComponent', () => {
  let component: CountconsonantsComponent;
  let fixture: ComponentFixture<CountconsonantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountconsonantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountconsonantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
