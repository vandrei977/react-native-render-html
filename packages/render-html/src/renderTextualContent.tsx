import React from 'react';
import { TPhrasing, TText } from '@native-html/transient-render-engine';
import { TDefaultRendererProps } from './shared-types';
import getNativePropsForTNode from './helpers/getNativePropsForTNode';
import { SelectableText } from '@vandrei977/react-native-selectable-text';

const renderTextualContent = (
  props: TDefaultRendererProps<TPhrasing | TText>
) => {
  const handleSelection = (props as any).sharedProps.handleSelection;
  const nativeProps = getNativePropsForTNode(props);

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
