import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Divis } from './divis';

describe('Divis', () => {
  let component: Divis;
  let fixture: ComponentFixture<Divis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Divis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Divis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
