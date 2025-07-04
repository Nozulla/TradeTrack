import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearendpanelComponent } from './yearendpanel.component';

describe('YearendpanelComponent', () => {
  let component: YearendpanelComponent;
  let fixture: ComponentFixture<YearendpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearendpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearendpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
