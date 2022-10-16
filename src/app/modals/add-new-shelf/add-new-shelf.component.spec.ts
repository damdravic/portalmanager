import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewShelfComponent } from './add-new-shelf.component';

describe('AddNewShelfComponent', () => {
  let component: AddNewShelfComponent;
  let fixture: ComponentFixture<AddNewShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewShelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
