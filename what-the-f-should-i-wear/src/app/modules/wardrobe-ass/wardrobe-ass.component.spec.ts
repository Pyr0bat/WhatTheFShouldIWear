import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardrobeAssComponent } from './wardrobe-ass.component';

describe('WardrobeAssComponent', () => {
  let component: WardrobeAssComponent;
  let fixture: ComponentFixture<WardrobeAssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardrobeAssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardrobeAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
