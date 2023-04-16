import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterComponent } from './center.component';

describe('CenterComponent', () => {
  let component: CenterComponent;
  let fixture: ComponentFixture<CenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
