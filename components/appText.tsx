import type { PropsWithChildren } from 'react';
import { Text, type TextProps } from 'react-native';

interface AppTextProps {
  className?: string;
  children: React.ReactNode;
  props?: PropsWithChildren<TextProps>
};

const AppText = ({ className, children, ...props }: AppTextProps) => {
  return (
    <Text
    className={`font-montserrat ${className}`}
    {...props}>
      {children}
    </Text>
  )
};

export default AppText;
