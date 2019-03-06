import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemFeatureComponent } from './recipe-item-feature.component';

describe('RecipeItemFeatureComponent', () => {
  let component: RecipeItemFeatureComponent;
  let fixture: ComponentFixture<RecipeItemFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
