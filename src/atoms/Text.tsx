import React from 'react';
import { useTokens } from 'design-system-context';

export const Text = (Elm: React.JSXElementConstructor<typeof React.Component> | string) => (props) => {
    const tokens = useTokens();
    return (
        <Elm
            style={{
                color: tokens.colors.primary,
                fontSize: tokens.fontSizes[props.size] || 16
            }}
            {...props}
        />
    );
}