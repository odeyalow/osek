import { TouchableOpacity } from "react-native";
import AppText from "./ui/appText";

interface Props {
    onPress?: () => void;
    appearance?: "lightGray" | "dark";
    textStyles?: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const Button = ({ onPress, textStyles, children, appearance = "dark", icon }: Props) => {
    const APPEARANCE = {
        lightGray: "bg-lightGray",
        dark: "bg-dark",
    }

    const TEXT_COLOR = appearance === "lightGray" ? "dark" : "light";

    return (
        <TouchableOpacity
        onPress={onPress}
        className={`${APPEARANCE[appearance]} flex-row items-center gap-1 rounded-2xl px-5 py-4`}>
            <AppText color={TEXT_COLOR} className={`text-[18px] ${textStyles}`}>
                {children}
            </AppText>
            {icon}
        </TouchableOpacity>
    );
}
 
export default Button;