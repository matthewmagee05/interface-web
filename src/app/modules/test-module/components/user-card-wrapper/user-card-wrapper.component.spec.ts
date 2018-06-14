import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardWrapperComponent } from './user-card-wrapper.component';

describe('UserCardWrapperComponent', () => {
  let component: UserCardWrapperComponent;
  let fixture: ComponentFixture<UserCardWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
