import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldItemComponent } from './chield-item.component';

describe('ChieldItemComponent', () => {
  let component: ChieldItemComponent;
  let fixture: ComponentFixture<ChieldItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChieldItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChieldItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
