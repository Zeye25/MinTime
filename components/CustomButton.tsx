import { TouchableOpacity, Image } from "react-native";

const CustomButton = ({
    onPress,
    title="Click Me",
    imgSource,
    style,
    textStyle,
    isLoading = false
}: CustomButtonProps) => {

    return (
        <TouchableOpacity className={style}>
            <Image source={imgSource} className="size-7"/>
        </TouchableOpacity>
    )
}

export default CustomButton;