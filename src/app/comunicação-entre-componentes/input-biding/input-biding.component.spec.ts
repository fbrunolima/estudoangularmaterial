import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBidingComponent } from './input-biding.component';

describe('InputBidingComponent', () => {
  let component: InputBidingComponent;
  let fixture: ComponentFixture<InputBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBidingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
