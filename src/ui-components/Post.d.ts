/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    "4"?: PrimitiveOverrideProps<TextProps>;
    "7"?: PrimitiveOverrideProps<TextProps>;
    Post?: PrimitiveOverrideProps<FlexProps>;
    header?: PrimitiveOverrideProps<FlexProps>;
    Round?: PrimitiveOverrideProps<IconProps>;
    text_header?: PrimitiveOverrideProps<FlexProps>;
    PostOwner?: PrimitiveOverrideProps<TextProps>;
    PostDate?: PrimitiveOverrideProps<TextProps>;
    PostMessage?: PrimitiveOverrideProps<TextProps>;
    photo?: PrimitiveOverrideProps<FlexProps>;
    Media?: PrimitiveOverrideProps<FlexProps>;
    "pixel-grandi 1"?: PrimitiveOverrideProps<ImageProps>;
    celebrities?: PrimitiveOverrideProps<TextProps>;
    "Action buttons"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 14"?: PrimitiveOverrideProps<FlexProps>;
    "Comment stroke icon"?: PrimitiveOverrideProps<IconProps>;
    "Frame 15"?: PrimitiveOverrideProps<FlexProps>;
    "Retweet solid stroke icon"?: PrimitiveOverrideProps<IconProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    "Heart solid icon"?: PrimitiveOverrideProps<IconProps>;
    "Share stroke icon "?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type PostProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default";
} & {
    overrides?: PostOverridesProps | undefined | null;
}>;
export default function Post(props: PostProps): React.ReactElement;
