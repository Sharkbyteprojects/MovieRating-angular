import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgviewerComponent } from './imgviewer.component';

describe('ImgviewerComponent', () => {
  let component: ImgviewerComponent;
  let fixture: ComponentFixture<ImgviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
