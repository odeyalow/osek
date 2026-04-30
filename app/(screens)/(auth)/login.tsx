import { View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import Input from "@/components/ui/input";
import AppText from "@/components/ui/appText";
import Button from "@/components/ui/button";

import { useRouter } from "expo-router";

import TextLogo from 'assets/images/textLogo.svg';

const LoginScreen = () => {
    const { back, replace } = useRouter();

    return (
        <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 px-[20px] h-full bg-light justify-center items-center flex-col gap-6">
            <View className="absolute top-20">
                <TextLogo width={100} height={23.2} color="#212529"/>
            </View>
            <AppText className="text-4xl font-semibold self-start">Вход</AppText>
            <View className="flex-col gap-4 w-full">
                <Input
                keyboardType="default"
                placeholder="Номер телефона или имя польз."/>
                <Input
                keyboardType="default"
                placeholder="Пароль"/>
            </View>
            <View className="flex-row gap-4">
                <Button
                onPress={() => back()}
                appearance="lightGray"
                className="gap-2 justify-center flex-1"
                >
                    Назад
                </Button>
                <Button
                className="gap-2 justify-center flex-1"
                >
                    Войти
                </Button>
            </View>
            <TouchableOpacity
            onPress={() => {}}
            className="absolute bottom-20">
                <AppText className="text-[18px] font-semibold">Забыли пароль?</AppText>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
 
export default LoginScreen;