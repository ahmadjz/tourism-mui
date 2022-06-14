import "./App.css";
import TourCard from "./components/TourCard";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={5}>
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
