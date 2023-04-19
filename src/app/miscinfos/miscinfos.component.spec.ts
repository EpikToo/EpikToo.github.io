import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscinfosComponent } from './miscinfos.component';

describe('MiscinfosComponent', () => {
  let component: MiscinfosComponent;
  let fixture: ComponentFixture<MiscinfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscinfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
