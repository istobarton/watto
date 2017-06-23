import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipDetailComponent } from './spaceship-detail.component';

describe('SpaceshipDetailComponent', () => {
  let component: SpaceshipDetailComponent;
  let fixture: ComponentFixture<SpaceshipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipDetailComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a selectedSpaceship property`, async(() => {
    const fixt = TestBed.createComponent(SpaceshipDetailComponent);
    const comp = fixt.debugElement.componentInstance;
    expect(comp.selectedSpaceship).toEqual(undefined);
  }));
});
