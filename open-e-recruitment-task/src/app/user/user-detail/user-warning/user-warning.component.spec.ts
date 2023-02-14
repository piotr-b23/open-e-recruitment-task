import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWarningComponent } from './user-warning.component';

describe('UserWarningComponent', () => {
  let component: UserWarningComponent;
  let fixture: ComponentFixture<UserWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
