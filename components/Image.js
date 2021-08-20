import React from 'react';

export const Image = (Elm) => (props) => {
    return <Elm style={{ width: 100, borderWidth: 5, borderStyle: 'solid', borderColor: '#000' }} {...props} />;
}