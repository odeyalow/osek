import { TouchableOpacity, View } from "react-native";
import TextLogo from 'assets/images/textLogo.svg'
import Svg, { Path } from "react-native-svg";

const FeedHeader = () => {
    return (
        <View className="bg-dark h-[70px] flex-row items-center justify-between px-[20px]">
            <TextLogo width={100} height={23.23} color="#F8F9FA"/>
            <View className="flex-row items-center gap-6">
                <TouchableOpacity>
                    <Svg width="30" height="30" fill="#F8F9FA" viewBox="0 0 256 256"><Path d="M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z"></Path></Svg>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Svg width="30" height="30" fill="#F8F9FA" viewBox="0 0 256 256"><Path d="M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"></Path></Svg>
                </TouchableOpacity>
                <TouchableOpacity className="bg-light p-2 rounded-full">
                    <Svg width="27" height="27" fill="#212529" viewBox="0 0 256 256"><Path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></Path></Svg>
                </TouchableOpacity>
            </View>
        </View>
    );
}
 
export default FeedHeader;