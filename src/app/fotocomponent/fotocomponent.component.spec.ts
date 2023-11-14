import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotocomponentComponent } from './fotocomponent.component';

describe('FotocomponentComponent', () => {
  let component: FotocomponentComponent;
  let fixture: ComponentFixture<FotocomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotocomponentComponent]
    });
    fixture = TestBed.createComponent(FotocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
