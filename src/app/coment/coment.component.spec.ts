/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComentComponent } from './coment.component';

describe('ComentComponent', () => {
  let component: ComentComponent;
  let fixture: ComponentFixture<ComentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
