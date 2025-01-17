import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentcarComponent } from './rentcar.component';

describe('RentcarComponent', () => {
  let component: RentcarComponent;
  let fixture: ComponentFixture<RentcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentcarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
