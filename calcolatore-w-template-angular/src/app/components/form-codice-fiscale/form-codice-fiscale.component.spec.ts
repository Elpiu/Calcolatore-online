import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCodiceFiscaleComponent } from './form-codice-fiscale.component';

describe('FormCodiceFiscaleComponent', () => {
  let component: FormCodiceFiscaleComponent;
  let fixture: ComponentFixture<FormCodiceFiscaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCodiceFiscaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCodiceFiscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
