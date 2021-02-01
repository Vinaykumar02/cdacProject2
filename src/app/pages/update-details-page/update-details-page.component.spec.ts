import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailsPageComponent } from './update-details-page.component';

describe('UpdateDetailsPageComponent', () => {
  let component: UpdateDetailsPageComponent;
  let fixture: ComponentFixture<UpdateDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
