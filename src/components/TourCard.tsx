import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Box,
  Rating,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  body3: React.CSSProperties;
}

const theme = createTheme({
  typography: {
    body3: {},
  } as ExtendedTypographyOptions,
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

type Tour = {
  id: number;
  name: string;
  duration: number;
  rating: number;
  numberOfReviews: number;
  price: number;
  image: string;
};

type TourCardProps = {
  tour: Tour;
};
const TourCard: React.FunctionComponent<TourCardProps> = (props) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img className="img" src={props.tour.image} alt="hi"></img>
          <Box paddingX={1}>
            <Typography component="h2" variant="subtitle1">
              {props.tour.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {props.tour.duration} Hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                size="small"
                name="read"
                value={props.tour.rating}
                readOnly
                precision={0.5}
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {props.tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                ({props.tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                Form C ${props.tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
