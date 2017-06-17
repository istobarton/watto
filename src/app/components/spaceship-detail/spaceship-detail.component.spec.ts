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
});
