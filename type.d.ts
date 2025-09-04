interface TabBarIconProps {
    focused: boolean;
    filledIcon: ImageSourcePropType;
    outlinedIcon: ImageSourcePropType;
    title: string;
}

interface CustomButtonProps {
    onPress: () => void;
    title?: string;
    imgSource?: ImageSourcePropType;
    style?: string;
    textStyle?: string;
    isLoading?: boolean;
}

