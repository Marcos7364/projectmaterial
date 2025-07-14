import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expanel } from './expanel';

describe('Expanel', () => {
  let component: Expanel;
  let fixture: ComponentFixture<Expanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
