import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassionsinfoComponent } from './passionsinfo.component';

describe('PassionsinfoComponent', () => {
  let component: PassionsinfoComponent;
  let fixture: ComponentFixture<PassionsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassionsinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassionsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
