import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytestcomponentComponent } from './mytestcomponent.component';

describe('MytestcomponentComponent', () => {
  let component: MytestcomponentComponent;
  let fixture: ComponentFixture<MytestcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytestcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytestcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
