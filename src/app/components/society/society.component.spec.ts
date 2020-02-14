import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyComponent } from './society.component';

describe('SocietyComponent', () => {
  let component: SocietyComponent;
  let fixture: ComponentFixture<SocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
