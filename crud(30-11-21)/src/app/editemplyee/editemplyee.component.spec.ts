import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemplyeeComponent } from './editemplyee.component';

describe('EditemplyeeComponent', () => {
  let component: EditemplyeeComponent;
  let fixture: ComponentFixture<EditemplyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditemplyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemplyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
