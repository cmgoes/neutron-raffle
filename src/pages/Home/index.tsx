import { Box, Container, Typography, Button } from "@mui/material";
import ActionFeed from "./components/ActionFeed";
import Banner from "./components/Banner";
import ActionList from "./components/ActionList";
import AboutUs from "./components/AboutUs";
import GrandDesign from "./components/GrandDesign";
import RoadMap from "./components/RoadMap";
import TicketManagement from "./components/TicketManagement";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "common.black" }}>
      <Container maxWidth="xl" sx={{ py: "24px" }}>
        <Banner />
        <Typography
          variant="h2"
          textAlign="center"
          fontFamily="Audiowide"
          color="white"
          sx={{
            fontSize: { xs: "20px", md: "28px" },
            mt: "36px",
            mb: "24px",
          }}
        >
          Stake Popular Tron NFT's to Mine Neutron & Proton Tokens!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "16px",
            mb: "36px",
          }}
        >
          <Button variant="contained" color="primary">
            Stake NFT's
          </Button>
        </Box>
        <ActionFeed />
        <ActionList />
      </Container>
      <AboutUs />
      <GrandDesign />
      <RoadMap />
      <TicketManagement />
    </Box>
  );
};

export default Home;
