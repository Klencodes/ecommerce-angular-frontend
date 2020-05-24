import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCatComponent } from './shop-cat.component';

describe('ShopCatComponent', () => {
  let component: ShopCatComponent;
  let fixture: ComponentFixture<ShopCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
