import { TextInput } from "react-native";
import { KeyboardType } from "react-native";

interface Props {
    placeholder: string;
    value?: string;
    keyboardType: KeyboardType;
}

const Input = ({ placeholder, value, keyboardType = "default" }: Props ) => {
    return (
        <TextInput
        defaultValue={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        className="bg-lightGray w-full lowercase h-[50px] text-[18px] rounded-2xl px-5 flex-row items-center placeholder:text-darkGray font-montserrat"/>
    );
}
 
export default Input;