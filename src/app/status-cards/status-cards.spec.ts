import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCards } from './status-cards';

describe('StatusCards', () => {
  let component: StatusCards;
  let fixture: ComponentFixture<StatusCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
