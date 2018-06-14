import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCardWrapperComponent } from './room-card-wrapper.component';

describe('RoomCardWrapperComponent', () => {
  let component: RoomCardWrapperComponent;
  let fixture: ComponentFixture<RoomCardWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCardWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
