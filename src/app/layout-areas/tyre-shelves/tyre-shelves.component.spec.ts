import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreShelvesComponent } from './tyre-shelves.component';

describe('TyreShelvesComponent', () => {
  let component: TyreShelvesComponent;
  let fixture: ComponentFixture<TyreShelvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyreShelvesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TyreShelvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
