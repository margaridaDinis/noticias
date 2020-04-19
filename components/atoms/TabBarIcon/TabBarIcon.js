import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { GUTTER } from '../../../constants/Layout';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      {...props}
      size={GUTTER * 2}
      style={{ marginBottom: -(GUTTER / 4) }}
      color={props.color}
    />
  );
}
