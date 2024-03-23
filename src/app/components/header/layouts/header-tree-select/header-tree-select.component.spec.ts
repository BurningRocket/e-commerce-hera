import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTreeSelectComponent } from './header-tree-select.component';

describe('HeaderTreeSelectComponent', () => {
  let component: HeaderTreeSelectComponent;
  let fixture: ComponentFixture<HeaderTreeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderTreeSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
