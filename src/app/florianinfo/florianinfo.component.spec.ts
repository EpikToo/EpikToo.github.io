import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorianinfoComponent } from './florianinfo.component';

describe('FlorianinfoComponent', () => {
  let component: FlorianinfoComponent;
  let fixture: ComponentFixture<FlorianinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlorianinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlorianinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
