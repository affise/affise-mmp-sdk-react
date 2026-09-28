import React from 'react';
import type {PropsWithChildren} from "react";
import {Button, ColorValue} from "react-native";

type Props = PropsWithChildren<{
    title: string;
    color: ColorValue;
    onPress?: (() => void);
}>;

export function AffiseButton({title, color, onPress}: Props) {
    return (
        <Button
            color={color}
            title={title}
            onPress={onPress}
        />
    );
}
