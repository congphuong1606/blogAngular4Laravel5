import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHighlightsComponent } from './news-highlights.component';

describe('NewsHighlightsComponent', () => {
  let component: NewsHighlightsComponent;
  let fixture: ComponentFixture<NewsHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
