import React from 'react';
import classNames, { Argument } from 'classnames';
import ConfigContext from '@/components/context';

type PrefixGenerator = (prefixCls: string) => Argument;

function isPrefixGenerator(arg: Argument | PrefixGenerator): arg is PrefixGenerator {
  return typeof arg === 'function';
}

export function useClassNames(...args: Array<Argument | PrefixGenerator>): string {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls();
  return classNames(...args.map((arg: Argument | PrefixGenerator) => {
    if (isPrefixGenerator(arg)) {
      return arg(prefixCls);
    }
    return arg;
  }));
}
