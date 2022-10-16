import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyrePageComponent } from './tyre-page.component';

describe('TyrePageComponent', () => {
  let component: TyrePageComponent;
  let fixture: ComponentFixture<TyrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyrePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TyrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
