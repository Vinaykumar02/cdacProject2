import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditDeletePageComponent } from './post-edit-delete-page.component';

describe('PostEditDeletePageComponent', () => {
  let component: PostEditDeletePageComponent;
  let fixture: ComponentFixture<PostEditDeletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEditDeletePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
