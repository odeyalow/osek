import Svg, { Path } from "react-native-svg";
import AvatarPlaceholder from 'assets/images/avatarPlaceholder.svg'
import { TouchableOpacity, View, Alert, Platform, ActionSheetIOS, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const AvatarChanger = () => {
    const [newAvatar, setNewAvatar] = useState<string | null>(null);

    const openCamera = async () => {
        const permission = await ImagePicker.requestCameraPermissionsAsync();

        if (!permission.granted) {
            Alert.alert("Нет доступа", "Разреши доступ к камере");
        return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ["images"],
            quality: 0.8,
        });

        if (!result.canceled) {
            setNewAvatar(result.assets[0].uri);
        }
    };

    const openGallery = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
            Alert.alert("Нет доступа", "Разреши доступ к галерее");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            quality: 0.8,
        });

        if (!result.canceled) {
            setNewAvatar(result.assets[0].uri);
        }
    };

    const showPickerMenu = () => {
    if (Platform.OS === "ios") {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Отмена", "Сделать снимок", "Выбрать из галереи"],
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                if (buttonIndex === 1) openCamera();
                if (buttonIndex === 2) openGallery();
            }
        );
    } else {
        Alert.alert("Выбери действие", "", [
            { text: "Сделать снимок", onPress: openCamera },
            { text: "Выбрать из галереи", onPress: openGallery },
            { text: "Отмена", style: "cancel" },
        ]);
    }
    };

    return (
        <View className="relative">
            <View className="rounded-full overflow-hidden">
                {
                    newAvatar ? (
                        <Image source={{ uri: newAvatar }} style={{ width: 175, height: 175 }} />
                    ) : (
                        <AvatarPlaceholder width={175} height={175}/>
                    )
                }
            </View>
            {
                !newAvatar ? (
                    <TouchableOpacity
                    onPress={showPickerMenu}
                    className="absolute bottom-0 right-0 bg-lightGray p-2 rounded-full">
                        <Svg width={22.5} height={22.5} fill="#212529" viewBox="0 0 256 256">
                            <Path d="M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4ZM128,84a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,84Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,156Z" />
                        </Svg>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                    onPress={() => setNewAvatar(null)}
                    className="absolute bottom-0 right-0 bg-lightGray p-2 rounded-full">
                        <Svg width="22.5" height="22.5" fill="#000000" viewBox="0 0 256 256"><Path d="M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"></Path></Svg>
                    </TouchableOpacity>
                )
            }
        </View>
    );
}
 
export default AvatarChanger;