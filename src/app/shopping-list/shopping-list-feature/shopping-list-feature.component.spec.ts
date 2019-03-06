import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListFeatureComponent } from './shopping-list-feature.component';

describe('ShoppingListFeatureComponent', () => {
  let component: ShoppingListFeatureComponent;
  let fixture: ComponentFixture<ShoppingListFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
