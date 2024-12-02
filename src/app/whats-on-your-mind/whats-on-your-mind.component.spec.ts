import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsOnYourMindComponent } from './whats-on-your-mind.component';

describe('WhatsOnYourMindComponent', () => {
  let component: WhatsOnYourMindComponent;
  let fixture: ComponentFixture<WhatsOnYourMindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsOnYourMindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsOnYourMindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
