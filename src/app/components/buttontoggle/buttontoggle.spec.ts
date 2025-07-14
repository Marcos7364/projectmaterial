import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttontoggle } from './buttontoggle';

describe('Buttontoggle', () => {
  let component: Buttontoggle;
  let fixture: ComponentFixture<Buttontoggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttontoggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttontoggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
