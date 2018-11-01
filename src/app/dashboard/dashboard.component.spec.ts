import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Materials Components
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule ,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

// Routes
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        DashboardRoutingModule,
        MatToolbarModule, 
        MatButtonModule, 
        MatIconModule ,
        MatSidenavModule,
        MatListModule
      ],
      declarations: [ DashboardComponent ],
      providers: [ {provide: Router, useValue: Router } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
