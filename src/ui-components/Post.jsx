/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function Post(props) {
  const { post, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "1": {},
        "4": {},
        "7": {},
        Round: {},
        PostOwner: {},
        PostDate: {},
        text_header: {},
        header: {},
        PostMessage: {},
        "pixel-grandi 1": {},
        Media: {},
        celebrities: {},
        photo: {},
        "Comment stroke icon": {},
        "Frame 14": {},
        "Retweet solid stroke icon": {},
        "Frame 15": {},
        "Heart solid icon": {},
        "Frame 16": {},
        "Share stroke icon ": {},
        "Action buttons": {},
        Post: {},
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="16px"
      direction="column"
      width="550px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="20px 20px 20px 20px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Post")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 10px 0px 10px"
        display="flex"
        {...getOverrideProps(overrides, "header")}
      >
        <Icon
          width="55px"
          height="55px"
          viewBox={{ minX: 0, minY: 0, width: 55, height: 55 }}
          paths={[
            {
              d: "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Round")}
        ></Icon>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="10px 10px 10px 10px"
          display="flex"
          {...getOverrideProps(overrides, "text_header")}
        >
          <Text
            fontFamily="SF Pro Text"
            fontSize="16px"
            fontWeight="500"
            color="rgba(104,118,132,1)"
            lineHeight="19.09375px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.15px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Mariane @marianeee "
            {...getOverrideProps(overrides, "PostOwner")}
          ></Text>
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="400"
            color="rgba(104,118,132,1)"
            lineHeight="16.40625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.15px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1/21/20"
            {...getOverrideProps(overrides, "PostDate")}
          ></Text>
        </Flex>
      </Flex>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(20,22,25,1)"
        lineHeight="20.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.15px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={post?.text}
        {...getOverrideProps(overrides, "PostMessage")}
      ></Text>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "photo")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="12px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Media")}
        >
          <Image
            width="unset"
            height="717px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "pixel-grandi 1")}
          ></Image>
        </Flex>
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          color="rgba(20,22,25,1)"
          lineHeight="19px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.15px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tom Cruise, Kristin Kreuk"
          {...getOverrideProps(overrides, "celebrities")}
        ></Text>
      </Flex>
      <Flex
        gap="23px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 20px 0px 20px"
        display="flex"
        {...getOverrideProps(overrides, "Action buttons")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 14")}
        >
          <Icon
            width="15px"
            height="14.51px"
            viewBox={{ minX: 0, minY: 0, width: 15, height: 14.50845718383789 }}
            paths={[
              {
                d: "M6.5 10.25C6.77614 10.25 7 10.4739 7 10.75L7 12.7079C9.74874 11.1024 11.4025 9.96659 12.3999 8.97494C12.9787 8.39946 13.2971 7.9087 13.482 7.44074C13.6679 6.97021 13.75 6.44448 13.75 5.75C13.75 3.26472 11.7353 1.25 9.25 1.25L5.75 1.25C3.26472 1.25 1.25 3.26472 1.25 5.75C1.25 8.23528 3.26472 10.25 5.75 10.25L6.5 10.25ZM7 14.1529C13.6641 10.3177 15 8.74691 15 5.75C15 2.57436 12.4256 0 9.25 0L5.75 0C2.57436 0 0 2.57436 0 5.75C0 8.92564 2.57436 11.5 5.75 11.5L5.75 14.0086C5.75 14.3911 6.16196 14.6318 6.4943 14.4424C6.66618 14.3445 6.83473 14.248 7 14.1529Z",
                fill: "rgba(104,118,132,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Comment stroke icon")}
          ></Icon>
          <Text
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="400"
            color="rgba(104,118,132,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.15px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="7"
            {...getOverrideProps(overrides, "7")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 15")}
        >
          <Icon
            width="18.38px"
            height="13.48px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 18.375001907348633,
              height: 13.478515625,
            }}
            paths={[
              {
                d: "M3.90533 0.21967C3.61244 -0.0732236 3.13756 -0.073223 2.84467 0.21967L0.256282 2.80806C-0.0854272 3.14977 -0.0854272 3.70379 0.256282 4.0455C0.59799 4.3872 1.15201 4.3872 1.49372 4.0455L2.5 3.03921L2.5 9.92678C2.5 11.7907 4.01104 13.3018 5.875 13.3018L9.875 13.3018C10.3582 13.3018 10.75 12.91 10.75 12.4268C10.75 11.9435 10.3582 11.5518 9.875 11.5518L5.875 11.5518C4.97754 11.5518 4.25 10.8242 4.25 9.92678L4.25 3.03921L5.25628 4.0455C5.59799 4.3872 6.15201 4.3872 6.49372 4.0455C6.83543 3.70379 6.83543 3.14977 6.49372 2.80806L3.90533 0.21967ZM8.5 0.176739C8.01675 0.176739 7.625 0.56849 7.625 1.05174C7.625 1.53499 8.01675 1.92674 8.5 1.92674L12.5 1.92674C13.3975 1.92674 14.125 2.65428 14.125 3.55174L14.125 10.4393L13.1187 9.43302C12.777 9.09131 12.223 9.09131 11.8813 9.43302C11.5396 9.77473 11.5396 10.3287 11.8813 10.6705L14.4697 13.2588C14.7626 13.5517 15.2374 13.5517 15.5303 13.2588L18.1187 10.6705C18.4604 10.3287 18.4604 9.77473 18.1187 9.43302C17.777 9.09131 17.223 9.09131 16.8813 9.43302L15.875 10.4393L15.875 3.55174C15.875 1.68778 14.364 0.176739 12.5 0.176739L8.5 0.176739Z",
                fill: "rgba(89,188,108,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Retweet solid stroke icon")}
          ></Icon>
          <Text
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="400"
            color="rgba(89,188,108,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.15px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1"
            {...getOverrideProps(overrides, "1")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 16")}
        >
          <Icon
            width="15px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 15, height: 14 }}
            paths={[
              {
                d: "M5.5511 0.375254L5.925 0.562194C6.54166 0.870508 7.04167 1.3705 7.35 1.98713C7.4118 2.11073 7.5882 2.11073 7.65 1.98713C7.95833 1.3705 8.45835 0.870508 9.075 0.562194L9.4489 0.375254C10.2078 -0.00419754 11.0775 -0.0996561 11.9007 0.10613C12.6927 0.304123 13.3924 0.768694 13.8822 1.42177L14.0921 1.70156C14.6814 2.48733 15 3.44304 15 4.42525L15 4.73774C15 5.18554 14.9451 5.63165 14.8365 6.06609L14.7633 6.35877C14.507 7.38382 14.0484 8.3473 13.4144 9.19258L12.9881 9.761C12.6631 10.1943 12.3078 10.604 11.9248 10.9869L11.4924 11.4193C10.5039 12.4077 9.36257 13.2303 8.11225 13.8555C7.72683 14.0482 7.27317 14.0482 6.88775 13.8555C5.63743 13.2303 4.49607 12.4077 3.50761 11.4193L3.07522 10.9869C2.69222 10.604 2.33689 10.1943 2.01191 9.761L1.58558 9.19258C0.951593 8.3473 0.492983 7.38382 0.236708 6.35877L0.163535 6.06609C0.0549217 5.63165 0 5.18554 0 4.73774L0 4.42525C0 3.44304 0.318585 2.48733 0.907937 1.70156L1.11779 1.42177C1.60762 0.768694 2.30733 0.304123 3.09934 0.10613C3.92252 -0.0996561 4.79217 -0.00419754 5.5511 0.375254Z",
                fill: "rgba(206,57,95,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Heart solid icon")}
          ></Icon>
          <Text
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="400"
            color="rgba(206,57,95,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.15px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="4"
            {...getOverrideProps(overrides, "4")}
          ></Text>
        </Flex>
        <Icon
          width="15.25px"
          height="14.8px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 15.25,
            height: 14.801776885986328,
          }}
          paths={[
            {
              d: "M7.27145 0.146447C7.46671 -0.0488154 7.78329 -0.0488157 7.97855 0.146446L11.5669 3.73484C11.811 3.97891 11.811 4.37464 11.5669 4.61872C11.3229 4.8628 10.9271 4.8628 10.6831 4.61872L8.25 2.18566L8.25 9.67678C8.25 10.022 7.97018 10.3018 7.625 10.3018C7.27982 10.3018 7 10.022 7 9.67678L7 2.18566L4.56694 4.61872C4.32286 4.8628 3.92714 4.8628 3.68306 4.61872C3.43898 4.37464 3.43898 3.97891 3.68306 3.73484L7.27145 0.146447ZM0.625 8.05178C0.970178 8.05178 1.25 8.3316 1.25 8.67678L1.25 12.6768C1.25 13.16 1.64175 13.5518 2.125 13.5518L13.125 13.5518C13.6082 13.5518 14 13.16 14 12.6768L14 8.67678C14 8.3316 14.2798 8.05178 14.625 8.05178C14.9702 8.05178 15.25 8.3316 15.25 8.67678L15.25 12.6768C15.25 13.8504 14.2986 14.8018 13.125 14.8018L2.125 14.8018C0.951395 14.8018 0 13.8504 0 12.6768L0 8.67678C0 8.3316 0.279822 8.05178 0.625 8.05178Z",
              fill: "rgba(104,118,132,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Share stroke icon ")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
