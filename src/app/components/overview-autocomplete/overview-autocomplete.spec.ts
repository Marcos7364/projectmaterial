import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAutocomplete } from './overview-autocomplete';

describe('OverviewAutocomplete', () => {
  let component: OverviewAutocomplete;
  let fixture: ComponentFixture<OverviewAutocomplete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewAutocomplete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewAutocomplete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
