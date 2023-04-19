import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesinfoComponent } from './studiesinfo.component';

describe('StudiesinfoComponent', () => {
  let component: StudiesinfoComponent;
  let fixture: ComponentFixture<StudiesinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
