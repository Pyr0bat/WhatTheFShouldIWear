import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTileComponent } from './load-tile.component';

describe('LoadTileComponent', () => {
  let component: LoadTileComponent;
  let fixture: ComponentFixture<LoadTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
