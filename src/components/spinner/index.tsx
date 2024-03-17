import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './styles';

const Spinner = () => (
    <SpinnerOverlay data-testid='spinner'>
        <SpinnerContainer />
    </SpinnerOverlay>
);

export default Spinner;