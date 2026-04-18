import type { PropsWithChildren } from 'react';
import { Text, type TextProps } from 'react-native';

interface Props {
  className?: string;
  color?: 'light' | 'darkGray' | 'dark';
  children: React.ReactNode;
  props?: PropsWithChildren<TextProps>
};

const AppText = ({ className, color = 'dark', children, ...props }: Props) => {
  const COLORS = {
    light: 'text-light',
    darkGray: 'text-darkGray',
    dark: 'text-dark',
  }

  return (
    <Text
    className={`font-montserrat ${[COLORS[color]]} ${className}`}
    {...props}>
      {children}
    </Text>
  )
};

export default AppText;
