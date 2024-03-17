import React from 'react';
import { render, screen } from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from '../../../src/components/button';

describe('button tests', () => {
  it('should render base button when nothing is passed', () => {
    render(<Button>Test</Button>);

    expect(screen.getByRole('button')).toHaveStyle('background-color: white');
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('should be disabled if isLoading is true', () => {
    render(<Button isLoading={true}>Test</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render inverted button when passed inverted type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Test</Button>);

    expect(screen.getByRole('button')).toHaveStyle('background-color: black');
  });
});
