import { css } from "emotion";
import idx from "idx";
import * as React from "react";
import {
  IStyledProps,
  ITheme,
  override,
  strip,
  styled,
  StyledComponent
} from "../styles";

const clean = strip([]);

export interface IContainerProps extends IStyledProps<HTMLDivElement> {
  showImage: boolean;
}

export const Container = styled<IContainerProps, "div">("div")(
  {
    width: "100%",
    display: "flex"
  },
  ({ showImage }) =>
    showImage
      ? { flexDirection: "row", alignItems: "center" }
      : { flexDirection: "column" },

  // override styles
  override
);

export interface ILinkProps extends IStyledProps<HTMLAnchorElement> {}

export const Link = styled<ILinkProps, "a">("a")(
  {
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline"
    }
  },

  // override styles
  override
);

export interface ITitleProps extends IStyledProps<HTMLHeadingElement> {}

export const Title = styled<ITitleProps, "h3">("h3")(
  {
    marginTop: 0,
    marginBottom: 0,
    fontSize: "1.1rem",
    fontWeight: 400,
    lineHeight: 1.1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  ({ theme }) => ({
    // @ts-ignore: If an intermediate property is either null or undefined, it is instead returned
    color: idx(theme, _ => _.colors.brand.primary) || "#333",
    // @ts-ignore: fixed by babel-plugin-emotion
    [Link]: {
      // @ts-ignore: If an intermediate property is either null or undefined, it is instead returned
      color: idx(theme, _ => _.colors.brand.primary) || "#333"
    }
  }),

  // override styles
  override
);

export interface IDescriptionProps extends IStyledProps<HTMLParagraphElement> {}

export const Description = styled<IDescriptionProps, "p">("p")(
  {
    color: "#545454",
    fontSize: "0.85rem",
    lineHeight: 1.4,
    wordWrap: "break-word",
    overflowWrap: "break-word",
    marginTop: 2,
    marginBottom: 4
  },
  // override styles
  override
);

export interface IURLProps extends IStyledProps<HTMLParagraphElement> {}

export const URL = styled<IURLProps, "p">("p")(
  {
    color: "#a2a2a2",
    fontSize: 13,
    lineHeight: 1.4,
    margin: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",

    // @ts-ignore: fixed by babel-plugin-emotion
    [Link]: {
      color: "#a2a2a2"
    }
  },
  ({ theme }) => ({
    // @ts-ignore: fixed by babel-plugin-emotion
    [Link]: {
      "&:hover": {
        // @ts-ignore
        color: idx(theme, _ => _.colors.brand.primary) || "#333"
      }
    }
  }),
  // override styles
  override
);