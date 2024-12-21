import { Box, BoxProps } from "@mui/material";

type Size = "extraSmall" | "small" | "medium" | "full" | "large" | "extraLarge";

type ObjectFit = "cover" | "contain" | "fill";

const convertSizeToPercentage: Record<Size, string> = {
  extraSmall: "25%",
  small: "50%",
  medium: "75%",
  full: "100%",
  large: "150%",
  extraLarge: "200%"
};

type Props = BoxProps & {
  src: string;
  alt: string;
  size?: Size;
  objectFit?: ObjectFit;
};

/**
 * @param {Size} size - The size of the image. It determines the width and height of the image as a percentage of the parent container.
 * Possible values:
 *   - "extraSmall" -> 25% of the parent container.
 *   - "small" -> 50% of the parent container.
 *   - "medium" -> 75% of the parent container.
 *   - "full" -> 100% of the parent container (default).
 *   - "large" -> 150% of the parent container.
 *   - "extraLarge" -> 200% of the parent container.
 */
export function Image({ src, alt, size = "full", objectFit = "cover", ...other }: Props) {
  const width = convertSizeToPercentage[size];

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width,
        height: width,
        objectFit,
        ...other
      }}
    />
  );
}
