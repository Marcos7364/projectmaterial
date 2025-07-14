import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOverview } from './autocomplete-overview';

describe('AutocompleteOverview', () => {
  let component: AutocompleteOverview;
  let fixture: ComponentFixture<AutocompleteOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
