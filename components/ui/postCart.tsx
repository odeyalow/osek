import { TouchableOpacity, View, Pressable } from "react-native";
import AvatarPlaceholder from 'assets/images/avatarPlaceholder.svg';
import AppText from "./appText";

import { useRouter } from "expo-router";

import Svg, { Path } from "react-native-svg";

interface Props {
    postId: string;
    userId: string;
    text: string;
    likesCount: number;
    dislikesCount: number;
    commentsCount: number;
}

const PostCard = ({ postId, userId, text, likesCount, dislikesCount, commentsCount }: Props) => {
    const { push } = useRouter();

    return (
        <Pressable
        onPress={() => push({
            pathname: "/(screens)/post/[postId]",
            params: { postId }
        })}
        className="bg-lightGray p-[15px] rounded-2xl flex-col gap-5">
            <View className="flex-row items-center gap-4">
                <View className="rounded-full overflow-hidden w-[35px] aspect-square">
                    <AvatarPlaceholder width={35} height={35}/>
                </View>
                <TouchableOpacity>
                    <AppText color="darkGray" className="text-[18px] font-semibold">
                        {userId}
                    </AppText>
                </TouchableOpacity>
            </View>
            <AppText color="dark" className="text-[16px]">
                {text}
            </AppText>
            <View className="flex-row gap-6">
                <TouchableOpacity className="flex-row items-center gap-2">
                    <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z"></Path></Svg>
                    <AppText color="darkGray" className="text-[16px] font-semibold">
                        {likesCount}
                    </AppText>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center gap-2">
                    <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z"></Path></Svg>
                    <AppText color="darkGray" className="text-[16px] font-semibold">
                        {dislikesCount}
                    </AppText>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center gap-2">
                    <Svg width="20" height="20" fill="#6C757D" viewBox="0 0 256 256"><Path d="M232,64V192a16,16,0,0,1-16,16H83l-32.6,28.16-.09.07A15.89,15.89,0,0,1,40,240a16.05,16.05,0,0,1-6.79-1.52A15.84,15.84,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64Z"></Path></Svg>
                    <AppText color="darkGray" className="text-[16px] font-semibold">
                        {commentsCount}
                    </AppText>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
}
 
export default PostCard;