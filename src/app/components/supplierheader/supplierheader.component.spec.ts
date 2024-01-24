import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierheaderComponent } from './supplierheader.component';

describe('SupplierheaderComponent', () => {
  let component: SupplierheaderComponent;
  let fixture: ComponentFixture<SupplierheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
