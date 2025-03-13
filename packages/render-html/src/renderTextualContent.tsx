// @ts-nocheck
import React from 'react';
import { TPhrasing, TText } from '@native-html/transient-render-engine';
import { TDefaultRendererProps } from './shared-types';
import getNativePropsForTNode from './helpers/getNativePropsForTNode';

import { Text } from 'react-native';

const renderTextualContent = (
  props: TDefaultRendererProps<TPhrasing | TText>
) => {
  const shouldHandleTap = (props as any).sharedProps.shouldHandleTap;
  const nativeProps = getNativePropsForTNode(props);
  if (shouldHandleTap) {
    const onTap = () => {
      (props as any).sharedProps.handleWordTap(
        (props.tnode as any).init.domNode.attribs['searchkey'],
        (props.tnode as any).init.domNode.children[0].data
      );
    };
    const nativePropsWithPress = {
      ...nativeProps,
      onPress: props.tnode.classes[0] === 'glossar' ? onTap : undefined
    };
    return React.createElement(Text, nativePropsWithPress);
  }
  return React.createElement(Text, nativeProps);
};

export default renderTextualContent;
