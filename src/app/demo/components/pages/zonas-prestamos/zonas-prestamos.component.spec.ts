import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasPrestamosComponent } from './zonas-prestamos.component';

describe('ZonasPrestamosComponent', () => {
  let component: ZonasPrestamosComponent;
  let fixture: ComponentFixture<ZonasPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonasPrestamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonasPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
