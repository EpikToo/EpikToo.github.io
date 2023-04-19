import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameinfoComponent } from './nameinfo.component';

describe('NameinfoComponent', () => {
  let component: NameinfoComponent;
  let fixture: ComponentFixture<NameinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
