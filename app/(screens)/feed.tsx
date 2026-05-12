import { View, FlatList } from "react-native";
import FeedHeader from "@/components/layouts/feedHeader";
import PostCard from "@/components/ui/postCart";

import { Posts } from "@/example_db";

const FeedScreen = () => {
    return (
        <View className="bg-light flex-1 flex-col">
            <FeedHeader />
            <FlatList
                data={Posts}
                renderItem={item => <PostCard postId={item.item.postId} userId={item.item.userId} text={item.item.text} likesCount={item.item.likesCount} dislikesCount={item.item.dislikesCount} commentsCount={item.item.commentsCount}/>}
                keyExtractor={item => item.postId}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    paddingBottom: 30,
                }}
            />
        </View>
    );
}
 
export default FeedScreen;