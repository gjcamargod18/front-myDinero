import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancosListComponent } from './bancos-list.component';

describe('BancosListComponent', () => {
  let component: BancosListComponent;
  let fixture: ComponentFixture<BancosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
