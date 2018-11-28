import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPage } from './tabs.page';




describe('TabsPage', () => {
  console.log("SA.Sen describe");
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async(() => {
    console.log("SA.Sen beforeEach(async(");
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    
  }));

  beforeEach(() => {
    console.log("SA.Sen beforeEach");
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    console.log("SA.Sen should create");
    expect(component).toBeTruthy();
    
  });
});
