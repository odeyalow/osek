import { View, TouchableOpacity } from "react-native"
import AppText from "@/components/ui/appText"
import Button from "components/ui/button";

import { useRouter } from "expo-router";

import TextLogo from 'assets/images/TextLogo.svg';
import Arrow from "assets/icons/arrow.svg";

export default function Index() {
  const { push, replace } = useRouter();

  return (
    <View className="flex-1 px-[20px] h-full bg-light justify-center items-center">
      <View className="flex-col items-center">
        <View className="mb-14">
          <TextLogo width={200} height={46.39} color="#212529"/>
        </View>
        <AppText className="text-[30px] text-center font-bold mb-1">Добро пожаловать!</AppText>
        <AppText color="darkGray" className="text-[16px] text-center mb-6">Чтобы войти, подтвердите что вы студент</AppText>
        <Button
        onPress={() => replace('/(screens)/(auth)/register')}
        className="gap-2 flex-row items-center"
        icon={
          <View className="-rotate-90">
            <Arrow width={20} height={16.8} color="#F8F9FA"/>
          </View>
        }>
          Загрузить документ
        </Button>
      </View>
      <TouchableOpacity
      onPress={() => push('/(screens)/(auth)/login')}
      className="absolute bottom-20">
        <AppText className="text-[18px] font-semibold">У вас уже есть аккаунт?</AppText>
      </TouchableOpacity>
    </View>
  )
}
