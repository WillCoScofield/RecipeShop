import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailFeatureComponent } from './recipe-detail-feature.component';

describe('RecipeDetailFeatureComponent', () => {
  let component: RecipeDetailFeatureComponent;
  let fixture: ComponentFixture<RecipeDetailFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
