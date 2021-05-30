import React from 'react';

const ConfigContext = React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: (suffixCls?: string) => {
    if (suffixCls) return `hydrated-pig-${suffixCls}`;
    return 'hydrated-pig';
  },
});

export default ConfigContext;
