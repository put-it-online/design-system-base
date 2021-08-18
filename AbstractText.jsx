const TOKENS = { color: '#F00' };

export const AbstractText = (elm) => ({children}) => {
    return <elm style={{ color: TOKENS.color }}>{children}</elm>;
}