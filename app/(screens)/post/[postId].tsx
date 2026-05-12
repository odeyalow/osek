import { View, TouchableOpacity, ScrollView } from "react-native";
import { Screen } from "@/components/layouts/screen";
import Button from "@/components/ui/button";
import AvatarPlaceholder from 'assets/images/avatarPlaceholder.svg';
import AppText from "@/components/ui/appText";
import Svg, { Path } from "react-native-svg";

import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";

import Arrow from "assets/icons/arrow.svg";

import { Posts } from "@/example_db";

const SinglePost = () => {
    const { postId } = useLocalSearchParams();
    const { push, back } = useRouter();

    return (
       <ScrollView>
         <Screen className="flex-col gap-[20px] pb-[35px]">
            <View className="flex-row">
                <Button
                onPress={back}
                appearance="lightGray"
                className="flex-row-reverse"
                icon={
                    <View className="-rotate-180">
                        <Arrow width={20} height={16.8} color="#212529"/>
                    </View>
                }>Назад</Button>
            </View>
            <View
            className="flex-col gap-5">
                <View className="flex-row items-center gap-4">
                    <View className="rounded-full overflow-hidden w-[35px] aspect-square">
                        <AvatarPlaceholder width={35} height={35}/>
                    </View>
                    <TouchableOpacity>
                        <AppText color="darkGray" className="text-[18px] font-semibold">
                            {Posts[Number(postId)-1].userId}
                        </AppText>
                    </TouchableOpacity>
                </View>
                <AppText color="dark" className="text-[16px]">
                    {Posts[Number(postId)-1].text}
                </AppText>
                <View className="flex-row gap-6">
                    <TouchableOpacity className="flex-row items-center gap-2">
                        <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z"></Path></Svg>
                        <AppText color="darkGray" className="text-[16px] font-semibold">
                            {Posts[Number(postId)-1].likesCount}
                        </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center gap-2">
                        <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z"></Path></Svg>
                        <AppText color="darkGray" className="text-[16px] font-semibold">
                            {Posts[Number(postId)-1].dislikesCount}
                        </AppText>
                    </TouchableOpacity>
                </View>
            </View>
            <AppText className="text-xl font-semibold">
                Комменатрии (3)
            </AppText>
            <View
            className="bg-lightGray p-[15px] rounded-2xl flex-col gap-5">
                <View className="flex-row items-center gap-4">
                    <View className="rounded-full overflow-hidden w-[35px] aspect-square">
                        <AvatarPlaceholder width={35} height={35}/>
                    </View>
                    <TouchableOpacity>
                        <AppText color="darkGray" className="text-[18px] font-semibold">
                            {Posts[Number(postId)-1].userId}
                        </AppText>
                    </TouchableOpacity>
                </View>
                <AppText color="dark" className="text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia mollitia, quis eligendi inventore officia eos explicabo esse eveniet quidem voluptates facere quo assumenda? Aspernatur temporibus quia illo sed consequatur voluptatum tempore at minima placeat accusamus rerum, vitae ducimus impedit laudantium perferendis! Facilis provident cumque natus minus unde, dolore saepe.
                </AppText>
                <View className="flex-row gap-6">
                    <TouchableOpacity className="flex-row items-center gap-2">
                        <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z"></Path></Svg>
                        <AppText color="darkGray" className="text-[16px] font-semibold">
                            {Math.floor(Math.random() * 100 / 2)}
                        </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center gap-2">
                        <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z"></Path></Svg>
                        <AppText color="darkGray" className="text-[16px] font-semibold">
                            {Math.floor(Math.random() * 100 / 2)}
                        </AppText>
                    </TouchableOpacity>
                </View>
            </View>
            <View
            className="bg-lightGray p-[15px] rounded-2xl flex-col gap-5">
                <View className="flex-row items-center gap-4">
                    <View className="rounded-full overflow-hidden w-[35px] aspect-square">
                        <AvatarPlaceholder width={35} height={35}/>
                    </View>
                    <TouchableOpacity>
                        <AppText color="darkGray" className="text-[18px] font-semibold">
                            {Posts[Number(postId)-1].userId}
                        </AppText>
                    </TouchableOpacity>
                </View>
                <AppText color="dark" className="text-[16px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iure tempore soluta deserunt perferendis, ipsam dicta quis cupiditate repellat distinctio quae dignissimos, mollitia aliquam.
                </AppText>
                <View className="flex-row gap-6">
                    <TouchableOpacity className="flex-row items-center gap-2">
                        <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z"></Path></Svg>
                        <AppText color="darkGray" className="text-[16px] font-semibold">
                            {Math.floor(Math.random() * 100 / 2)}
                        </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center gap-2">
                        <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z"></Path></Svg>
                        <AppText color="darkGray" className="text-[16px] font-semibold">
                            {Math.floor(Math.random() * 100 / 2)}
                        </AppText>
                    </TouchableOpacity>
                </View>
            </View>
            <View
            className="bg-lightGray p-[15px] rounded-2xl flex-col gap-5">
                <View className="flex-row items-center gap-4">
                    <View className="rounded-full overflow-hidden w-[35px] aspect-square">
                        <AvatarPlaceholder width={35} height={35}/>
                    </View>
                    <TouchableOpacity>
                        <AppText color="darkGray" className="text-[18px] font-semibold">
                            {Posts[Number(postId)-1].userId}
                        </AppText>
                    </TouchableOpacity>
                </View>
                <AppText color="dark" className="text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio non quae accusantium natus ex consequatur, explicabo dolorem possimus sequi? Dolorum perspiciatis sed corporis odio eveniet saepe obcaecati voluptates dicta.
                </AppText>
                <View className="flex-row gap-6">
                    <TouchableOpacity className="flex-row items-center gap-2">
                        <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z"></Path></Svg>
                        <AppText color="darkGray" className="text-[16px] font-semibold">
                            {Math.floor(Math.random() * 100 / 2)}
                        </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center gap-2">
                        <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z"></Path></Svg>
                        <AppText color="darkGray" className="text-[16px] font-semibold">
                            {Math.floor(Math.random() * 100 / 2)}
                        </AppText>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
       </ScrollView>
    );
}
 
export default SinglePost;