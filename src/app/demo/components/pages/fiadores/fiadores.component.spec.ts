import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiadoresComponent } from './fiadores.component';

describe('FiadoresComponent', () => {
  let component: FiadoresComponent;
  let fixture: ComponentFixture<FiadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
