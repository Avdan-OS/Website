// prettier-ignore
import { Button, Card, Text, Image, Grid, Spacer, useTheme, Tag, useToasts } from '@geist-ui/core';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';

const Download = () => {
  const theme = useTheme();

  const [gridDirection, setGridDirection] = useState<'row' | 'column' | 'row-reverse' | 'column-reverse'>('row');
  const [gridWidth, setGridWidth] = useState(6);
  const { setToast } = useToasts();

  dynamicWidth((width) => {
    if (width < 950) {
      setGridDirection('column');
      setGridWidth(14);
    } else {
      setGridDirection('row');
      setGridWidth(8);
    }
  });

  return <>Manual is not available yet</>;
};
export default Download;
