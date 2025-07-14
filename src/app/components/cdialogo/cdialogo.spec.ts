import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cdialogo } from './cdialogo';

describe('Cdialogo', () => {
  let component: Cdialogo;
  let fixture: ComponentFixture<Cdialogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cdialogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cdialogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
