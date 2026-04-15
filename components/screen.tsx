import type { ReactNode } from 'react';
import { View } from 'react-native';

type ScreenProps = {
  children?: ReactNode;
};

export function Screen({ children }: ScreenProps) {
  return (
    <View className="flex-1 px-[15px]">
      {children}
    </View>
  );
}
