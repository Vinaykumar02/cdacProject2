import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationDialogeComponent } from './delete-confirmation-dialoge.component';

describe('DeleteConfirmationDialogeComponent', () => {
  let component: DeleteConfirmationDialogeComponent;
  let fixture: ComponentFixture<DeleteConfirmationDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfirmationDialogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfirmationDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
