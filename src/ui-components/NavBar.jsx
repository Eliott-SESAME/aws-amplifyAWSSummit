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
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Title: {},
        Text: {},
        ButtonAdd: {},
        ButtonLogout: {},
        Buttons: {},
        NavBar: {},
      },
      variantValues: { size: "default" },
    },
    {
      overrides: {
        Title: { fontSize: "16px", letterSpacing: "0.01px" },
        Text: { justifyContent: "flex-start" },
        ButtonAdd: {},
        ButtonLogout: {},
        Buttons: {},
        NavBar: {},
      },
      variantValues: { size: "small" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.25)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.17px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Instamplify"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Buttons")}
      >
        <Button
          width="unset"
          height="unset"
          display="none"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="New Post"
          {...getOverrideProps(overrides, "ButtonAdd")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Sign out"
          {...getOverrideProps(overrides, "ButtonLogout")}
        ></Button>
      </Flex>
    </Flex>
  );
}
