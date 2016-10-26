import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TestUtils }                        from '../../test';
import { FirstPage }                            from './first-page';



let fixture: ComponentFixture<FirstPage> = null;
let instance: any = null;

describe('Pages: FirstPage', () => {

  beforeEach(() => {
    TestUtils.configureIonicTestingModule([FirstPage]);
    fixture = TestBed.createComponent(FirstPage);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create FirstPage', async(() => {
    expect(instance).toBeTruthy();
  }));
});