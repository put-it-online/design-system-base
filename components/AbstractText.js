import React from 'react';

const TOKENS = { color: '#F00', sizes: {
    small: 12,
    medium: 24,
    large: 72
} };

export const AbstractText = (Elm) => (props) => {
    return <Elm style={{ color: TOKENS.color, fontSize: TOKENS.sizes[props.size] || 16, fontFamily: 'arial' }} {...props} />;
}