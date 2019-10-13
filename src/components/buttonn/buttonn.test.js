import React from 'react';
import {shallow, mount} from 'enzyme';

import Buttonn from './buttonn';

describe('Buttonn', () => {
  const shallowButtonn = props => shallow(<Buttonn {...props}/>);
  const mountButtonn = props => mount(<Buttonn {...props}/>);

  it('should create component', () => {
    mountButtonn().should.have.type(Buttonn);
  });

  it('should wrap children with div', () => {
    shallowButtonn().should.have.tagName('div');
  });

  it('should use passed className', () => {
    shallowButtonn({
      className: 'test-class'
    }).should.have.className('test-class');
  });

  // TODO Add more tests
});
