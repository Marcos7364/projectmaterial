import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeOverview } from './badge-overview';

describe('BadgeOverview', () => {
  let component: BadgeOverview;
  let fixture: ComponentFixture<BadgeOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
