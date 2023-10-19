import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNavigationMenuComponent } from './top-navigation-menu.component';

describe('TopNavigationMenuComponent', () => {
  let component: TopNavigationMenuComponent;
  let fixture: ComponentFixture<TopNavigationMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavigationMenuComponent]
    });
    fixture = TestBed.createComponent(TopNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
