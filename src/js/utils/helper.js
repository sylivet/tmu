
export const windowOffset = () => {
    const supportPageOffset = window.pageXOffset !== undefined || undefined;
    const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
    return supportPageOffset
      ? window.pageYOffset
      : isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  };