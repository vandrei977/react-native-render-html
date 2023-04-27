import React from 'react';
import { TPhrasing, TText } from '@native-html/transient-render-engine';
import { TDefaultRendererProps } from './shared-types';
import getNativePropsForTNode from './helpers/getNativePropsForTNode';
import { SelectableText } from '@vandrei977/react-native-selectable-text';
import { Text } from 'react-native';

const renderTextualContent = (
  props: TDefaultRendererProps<TPhrasing | TText>
) => {
  const handleSelection = (props as any).sharedProps.handleSelection;
  const shouldHandleTap = (props as any).sharedProps.shouldHandleTap;
  const nativeProps = getNativePropsForTNode(props);
  if (shouldHandleTap) {
    const onTap = () => {
      (props as any).sharedProps.handleGlossarWordTap(
        (props.tnode as any).init.domNode.children[0].data
      );
    };
    const nativePropsWithPress = {
      ...nativeProps,
      onPress: props.tnode.classes[0] === 'glossar' ? onTap : undefined
    };
    return React.createElement(Text, nativePropsWithPress);
  }
  return (
    <SelectableText
      menuItems={['Translate']}
      onSelection={handleSelection}
      value={(nativeProps as any).children}
      style={nativeProps.style}
      prependToChild={''}
    />
  );
};

export default renderTextualContent;
