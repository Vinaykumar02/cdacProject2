import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdoptionComponent } from './dialog-adoption.component';

describe('DialogAdoptionComponent', () => {
  let component: DialogAdoptionComponent;
  let fixture: ComponentFixture<DialogAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
