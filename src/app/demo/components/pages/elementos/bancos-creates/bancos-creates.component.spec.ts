import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancosCreatesComponent } from './bancos-creates.component';

describe('BancosCreatesComponent', () => {
  let component: BancosCreatesComponent;
  let fixture: ComponentFixture<BancosCreatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancosCreatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancosCreatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
