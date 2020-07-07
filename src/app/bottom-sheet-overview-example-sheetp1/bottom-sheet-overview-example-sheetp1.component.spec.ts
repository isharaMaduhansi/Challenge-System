import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetOverviewExampleSheetp1Component } from './bottom-sheet-overview-example-sheetp1.component';

describe('BottomSheetOverviewExampleSheetp1Component', () => {
  let component: BottomSheetOverviewExampleSheetp1Component;
  let fixture: ComponentFixture<BottomSheetOverviewExampleSheetp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetOverviewExampleSheetp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetOverviewExampleSheetp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
