import { TypographyOptions } from "@mui/material/styles/createTypography";

export const convertPixelsToRem = (size: number): string => `${size / 16}rem`;

export type Sizes = {
  sm: number;
  md: number;
  lg: number;
};

export const responsiveFontSize = (sizes: Sizes) => ({
  "@media (min-width:600px)": { fontSize: convertPixelsToRem(sizes.sm) },
  "@media (min-width:900px)": { fontSize: convertPixelsToRem(sizes.md) },
  "@media (min-width:1200px)": { fontSize: convertPixelsToRem(sizes.lg) }
});

const PRIMARY_FONT = "Poppins, Arial, sans-serif";

export const typography: TypographyOptions = {
  fontFamily: PRIMARY_FONT,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 1.4,
    fontSize: convertPixelsToRem(36),
    ...responsiveFontSize({ sm: 44, md: 48, lg: 52 })
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1.3,
    fontSize: convertPixelsToRem(30),
    ...responsiveFontSize({ sm: 38, md: 42, lg: 46 })
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: convertPixelsToRem(22),
    ...responsiveFontSize({ sm: 34, md: 38, lg: 42 })
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: convertPixelsToRem(18),
    ...responsiveFontSize({ sm: 20, md: 22, lg: 24 })
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: convertPixelsToRem(16),
    ...responsiveFontSize({ sm: 18, md: 18, lg: 20 })
  },
  h6: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: convertPixelsToRem(14),
    ...responsiveFontSize({ sm: 16, md: 16, lg: 18 })
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.3,
    fontSize: convertPixelsToRem(16)
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: convertPixelsToRem(14)
  },
  body1: {
    lineHeight: 1.3,
    fontSize: convertPixelsToRem(16)
  },
  body2: {
    lineHeight: 1.2,
    fontSize: convertPixelsToRem(14)
  },
  caption: {
    lineHeight: 1.2,
    fontSize: convertPixelsToRem(12)
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.4,
    fontSize: convertPixelsToRem(10),
    textTransform: "uppercase"
  },
  button: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: convertPixelsToRem(14),
    textTransform: "unset"
  }
};
