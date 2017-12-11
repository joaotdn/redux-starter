import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup() {
  let props = {
    course: {}, saving: false, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CourseForm via React Test Utils', () => {
  it('renders form and H1', () => {
    // verifica se o primeiro elemento é um form
    const { output } = setup();
    expect(output.type).toBe('form');
    // se dentro do form o primeiro elemento é h1
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is loaded "Save" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });
});
