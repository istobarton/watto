import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should hold a list of spaceships`, async(() => {
    const fixt = TestBed.createComponent(DashboardComponent);
    const app = fixt.debugElement.componentInstance;
    expect(app.spaceships).toBeTruthy();
  }));

  it('should render a list regardless of promise', async(() => {
    const fixt = TestBed.createComponent(DashboardComponent);
    fixt.detectChanges();
    const compiled = fixt.debugElement.nativeElement;
    expect(compiled.querySelector('ul')).toBeTruthy();
  }));

});
