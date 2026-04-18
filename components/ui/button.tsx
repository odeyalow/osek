import { TouchableOpacity } from "react-native";
import AppText from "./appText";

interface Props {
    onPress?: () => void;
    appearance?: "lightGray" | "dark";
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

const Button = ({ onPress, children, appearance = "dark", icon, className }: Props) => {
    const APPEARANCE = {
        lightGray: "bg-lightGray",
        dark: "bg-dark",
    }

    const TEXT_COLOR = appearance === "lightGray" ? "dark" : "light";

    return (
        <TouchableOpacity
        onPress={onPress}
        className={`${APPEARANCE[appearance]} ${className} flex-row items-center gap-1 rounded-2xl px-5 py-4`}>
            <AppText color={TEXT_COLOR} className={`text-[18px] font-medium`}>
                {children}
            </AppText>
            {icon}
        </TouchableOpacity>
    );
}
 
export default Button;