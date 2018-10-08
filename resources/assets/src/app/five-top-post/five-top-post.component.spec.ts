import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveTopPostComponent } from './five-top-post.component';

describe('FiveTopPostComponent', () => {
  let component: FiveTopPostComponent;
  let fixture: ComponentFixture<FiveTopPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveTopPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveTopPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
