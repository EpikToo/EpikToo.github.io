import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureinfoComponent } from './pictureinfo.component';

describe('PictureinfoComponent', () => {
  let component: PictureinfoComponent;
  let fixture: ComponentFixture<PictureinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
