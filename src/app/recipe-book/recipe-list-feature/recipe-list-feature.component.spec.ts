import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListFeatureComponent } from './recipe-list-feature.component';

describe('RecipeListFeatureComponent', () => {
  let component: RecipeListFeatureComponent;
  let fixture: ComponentFixture<RecipeListFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
