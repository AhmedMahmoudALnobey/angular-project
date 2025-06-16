import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCombonent } from './main-combonent';

describe('MainCombonent', () => {
  let component: MainCombonent;
  let fixture: ComponentFixture<MainCombonent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCombonent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCombonent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
