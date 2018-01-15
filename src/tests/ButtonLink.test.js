import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonLink } from 'components';
import renderer from 'react-test-renderer';

let standardButton = <ButtonLink buttonAction="" buttonText="Test Button" buttonIcon="" />;
let buttonWithIcon = <ButtonLink buttonAction="" buttonText="Test Button" buttonIcon="IconTestIcon" />;
let primaryButton = <ButtonLink buttonAction="" buttonText="Test Button" buttonIcon="" isPrimary={true} />;

it('renders standard button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(standardButton, div);
});

it('renders primary button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(primaryButton, div);
});

it('renders correct standard button type', () => {
  const standardBtn = renderer.create(standardButton);
  let button = standardBtn.toJSON();
  expect(button).toMatchSnapshot();
});

it('renders correct primary button type', () => {
  const primaryBtn = renderer.create(primaryButton);
  let button = primaryBtn.toJSON();
  expect(button).toMatchSnapshot();
});

it('renders button icon if supplied', () => {
  const iconBtn = renderer.create(buttonWithIcon);
  let button = iconBtn.toJSON();
  expect(button).toMatchSnapshot();
});
