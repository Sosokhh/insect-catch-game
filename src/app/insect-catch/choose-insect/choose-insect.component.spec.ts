import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseInsectComponent } from './choose-insect.component';

describe('ChooseInsectComponent', () => {
  let component: ChooseInsectComponent;
  let fixture: ComponentFixture<ChooseInsectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseInsectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseInsectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
