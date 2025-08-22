import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelogramComponent } from './parallelogram.component';

describe('ParallelogramComponent', () => {
  let component: ParallelogramComponent;
  let fixture: ComponentFixture<ParallelogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelogramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallelogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
