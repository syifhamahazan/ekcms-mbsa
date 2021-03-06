import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanCardComponent } from './loan-card.component';

describe('LoanCardComponent', () => {
  let component: LoanCardComponent;
  let fixture: ComponentFixture<LoanCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
