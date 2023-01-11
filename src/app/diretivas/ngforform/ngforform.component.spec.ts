import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforformComponent } from './ngforform.component';

describe('NgforformComponent', () => {
  let component: NgforformComponent;
  let fixture: ComponentFixture<NgforformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
