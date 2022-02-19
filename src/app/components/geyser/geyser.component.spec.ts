import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeyserComponent } from './geyser.component';

describe('GeyserComponent', () => {
  let component: GeyserComponent;
  let fixture: ComponentFixture<GeyserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeyserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeyserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
