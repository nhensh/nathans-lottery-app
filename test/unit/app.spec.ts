import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';
import generate, { sortOrder } from '../../src/lottery';

describe('Stage App Component', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources(PLATFORM.moduleName('app'))
      .inView('<app></app>');
  });

  afterEach(() => component.dispose());

  it('should generate 6 unique numbers', done => {
    component.create(bootstrap).then(() => {
      const numbers = generate(6, 1, 49);
      expect((new Set(numbers)).size !== numbers.length).toBeFalsy();
      expect( numbers.length).toEqual(6);
      done();
    }).catch(e => {
      fail(e);
      done();
    });
  });
});
