import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./App.css";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <Card
        sx={{
          maxWidth: 550,
          maxHeight: 700,
          padding: 0.5,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {Title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {Year}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Review</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MovieCard;
