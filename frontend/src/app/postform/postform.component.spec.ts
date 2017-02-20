/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostformComponent } from './postform.component';

describe('PostformComponent', () => {
  let component: PostformComponent;
  let fixture: ComponentFixture<PostformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
