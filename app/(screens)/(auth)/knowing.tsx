import { View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import Input from "@/components/ui/input";
import AppText from "@/components/ui/appText";
import Button from "@/components/ui/button";
import AvatarChanger from "@/components/ui/avatarChanger";

import { useRouter } from "expo-router";

import TextLogo from 'assets/images/textLogo.svg';

const KnowingScreen = () => {
    const { back, replace } = useRouter();

    return (  
        <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 px-[20px] h-full bg-light justify-center items-center flex-col gap-6">
            <View className="absolute top-20">
                <TextLogo width={100} height={23.2} color="#212529"/>
            </View>
            <AppText className="text-2xl font-semibold text-center">Установите себе аватар и имя пользователя</AppText>
            <AvatarChanger />
            <Input
            keyboardType="default"
            placeholder="Александр Попов"/>
            <View className="flex-row gap-4">
                <Button
                onPress={() => replace('/(screens)/feed')}
                appearance="lightGray"
                className="gap-2 justify-center flex-1"
                >
                    Пропустить
                </Button>
                <Button
                onPress={() => replace('/(screens)/feed')}
                className="gap-2 justify-center flex-1"
                >
                    Готово
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
}
 
export default KnowingScreen;
