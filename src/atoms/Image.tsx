import React from 'react';

export const Image = (Elm: React.JSXElementConstructor<typeof React.Component> | string) => (props) => {
    const {style, ...otherProps} = props;
    return <Elm style={{ width: 100, height: 100, borderRadius: 50, ...style}} {...otherProps} />;
}