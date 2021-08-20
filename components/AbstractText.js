import React from 'react';

const TOKENS = { color: '#F00' };

export const AbstractText = (elm) => (props) => {
    return <elm style={{ color: TOKENS.color, fontSize: 24 }} {...props} />;
}