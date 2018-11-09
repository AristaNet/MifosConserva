import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsPhonesComponent } from './chips-phones.component';

describe('ChipsPhonesComponent', () => {
  let component: ChipsPhonesComponent;
  let fixture: ComponentFixture<ChipsPhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsPhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
