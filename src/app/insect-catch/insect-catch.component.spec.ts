import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectCatchComponent } from './insect-catch.component';

describe('InsectCatchComponent', () => {
  let component: InsectCatchComponent;
  let fixture: ComponentFixture<InsectCatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsectCatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsectCatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
