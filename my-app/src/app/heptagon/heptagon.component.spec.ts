import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeptagonComponent } from './heptagon.component';

describe('HeptagonComponent', () => {
  let component: HeptagonComponent;
  let fixture: ComponentFixture<HeptagonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeptagonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeptagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
