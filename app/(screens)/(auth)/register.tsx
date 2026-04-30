import { View, KeyboardAvoidingView } from "react-native";
import Input from "@/components/ui/input";
import AppText from "@/components/ui/appText";
import Button from "@/components/ui/button";

import { useRouter } from "expo-router";

import Arrow from 'assets/icons/arrow.svg';

import TextLogo from 'assets/images/textLogo.svg';

const RegisterScreen = () => {
    const { replace } = useRouter();
    
    return (  
        <KeyboardAvoidingView
        behavior="padding"
        className="flex-1 px-[20px] h-full bg-light justify-center items-center flex-col gap-6">
            <View className="absolute top-20">
                <TextLogo width={100} height={23.2} color="#212529"/>
            </View>
            <AppText className="text-4xl font-semibold self-start">Регистрация</AppText>
            <View className="flex-col gap-4 w-full">
                <Input
                keyboardType="number-pad"
                placeholder="Номер телефона"/>
                <Input
                keyboardType="default"
                placeholder="Пароль"/>
                <Input
                keyboardType="default"
                placeholder="Подтвердите пароль"/>
            </View>
            <Button
            onPress={() => replace('/(screens)/(auth)/knowing')}
            className="gap-2 justify-center w-full"
            icon={<Arrow width={20} height={16.8} color="#F8F9FA"/>}
            >
                Дальше
            </Button>
        </KeyboardAvoidingView>
    );
}
 
export default RegisterScreen;