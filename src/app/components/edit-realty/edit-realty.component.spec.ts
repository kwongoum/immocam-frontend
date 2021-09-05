import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRealtyComponent } from './edit-realty.component';

describe('EditRealtyComponent', () => {
  let component: EditRealtyComponent;
  let fixture: ComponentFixture<EditRealtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRealtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRealtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
