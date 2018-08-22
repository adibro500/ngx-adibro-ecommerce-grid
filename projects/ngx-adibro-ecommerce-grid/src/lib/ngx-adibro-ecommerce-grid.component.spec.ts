import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdibroEcommerceGridComponent } from './ngx-adibro-ecommerce-grid.component';

describe('NgxAdibroEcommerceGridComponent', () => {
  let component: NgxAdibroEcommerceGridComponent;
  let fixture: ComponentFixture<NgxAdibroEcommerceGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdibroEcommerceGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdibroEcommerceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
