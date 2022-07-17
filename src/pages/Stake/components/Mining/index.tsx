import { Box, Container, Typography, Button } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Wheel from "components/Wheel";
import "./mining.scss";
import BackgroundImage from "assets/images/stake_background.png";

const Mining = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.dark",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography fontSize="18px" color="white" textAlign="center" py="16px">
        Every 1000th proton mined triggers Jackpot!
      </Typography>
      <Container maxWidth="xl" sx={{ py: "24px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <Box
            className="card-desc"
            sx={{
              mb: { xs: "24px", lg: 0 },
              mt: { xs: 0, lg: "16px" },
              maxWidth: { xs: "100%", lg: "300px" },
              backgroundColor: "primary.light",
            }}
          >
            <Box
              className="card-desc-content"
              sx={{ backgroundColor: "common.black" }}
            >
              <Typography
                variant="h2"
                fontFamily="Audiowide"
                fontSize="20px"
                mb="24px"
                className="card-desc-title"
              >
                Action Feed:
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans" mb="8px">
                <Typography
                  component="span"
                  fontFamily="LucidaSans"
                  color="primary.dark"
                >
                  -bbryan927
                </Typography>{" "}
                just hit 7 on the withdraw spin & won 1 Proton token!
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans" mb="8px">
                <Typography
                  component="span"
                  fontFamily="LucidaSans"
                  color="primary.dark"
                >
                  -bbryan927
                </Typography>{" "}
                claimed 349 NeuTron tokens!
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans" mb="8px">
                <Typography
                  component="span"
                  fontFamily="LucidaSans"
                  color="primary.dark"
                >
                  -ceb888
                </Typography>{" "}
                claimed 76 NeuTron tokens!
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans" mb="8px">
                <Typography
                  component="span"
                  fontFamily="LucidaSans"
                  color="primary.dark"
                >
                  -sally8
                </Typography>{" "}
                claimed 208 NeuTron tokens!
              </Typography>
            </Box>
          </Box>
          <Box className="mining-container">
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row", lg: "column" },
                textAlign: "center",
                justifyContent: "space-around",
                alignItems: "center",
                mb: "16px",
              }}
            >
              <Box className="proton-amount">
                <Typography fontSize="24px" fontWeight="600" color="white">
                  8082 TRX
                </Typography>
              </Box>
              <Wheel />
              <Box
                className="spin-action"
                sx={{ backgroundColor: "common.black" }}
              >
                <Typography
                  fontSize="18px"
                  fontWeight="600"
                  color="white"
                  mb="8px"
                >
                  Earned Spins: 5
                </Typography>
                <Button variant="contained">Mine Proton</Button>
              </Box>
            </Box>
            <Box
              className="mining-content"
              sx={{ backgroundColor: "common.black" }}
            >
              <Typography
                textAlign="center"
                fontSize="28px"
                color="white"
                mb="24px"
              >
                <Typography
                  component="span"
                  color="primary.light"
                  fontSize="28px"
                >
                  NeuTron
                </Typography>{" "}
                Mining
              </Typography>

              <Box className="mining-action">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: { xs: "24px", sm: 0 },
                  }}
                >
                  <Box className="mining-status">
                    <SettingsOutlinedIcon
                      sx={{ color: "error.main", fontSize: "18px" }}
                    />
                    <Typography color="white" fontSize="14px">
                      Mined: new {Intl.NumberFormat("en-US").format(1778.552)}{" "}
                      <Typography
                        component="span"
                        color="primary.light"
                        fontSize="14px"
                      >
                        NEU
                      </Typography>
                    </Typography>
                  </Box>
                  <Button variant="contained" sx={{ whiteSpace: "nowrap" }}>
                    Claim all
                    <ArrowRightAltOutlinedIcon />
                  </Button>
                  <Typography
                    fontSize="14px"
                    color="error.main"
                    fontWeight="600"
                    textAlign="center"
                    mt="4px"
                  >
                    -3h
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "8px",
                    p: "8px 16px",
                    borderWidth: "1px",
                    borderColor: "primary.light",
                    borderStyle: "solid",
                    maxWidth: "fit-content",
                    mx: "auto",
                  }}
                  textAlign="center"
                >
                  <Typography color="white" fontSize="14px">
                    Total Missed: {Intl.NumberFormat("en-US").format(31.34)}{" "}
                    <Typography
                      component="span"
                      color="primary.light"
                      fontSize="14px"
                    >
                      NEU
                    </Typography>
                  </Typography>
                  <Typography color="white" fontSize="14px">
                    Make sure you are claiming every 3 days!
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: { xs: "24px", sm: 0 },
                  }}
                >
                  <Typography color="white" fontSize="14px">
                    Available: Mined: new{" "}
                    {Intl.NumberFormat("en-US").format(4365)}{" "}
                    <Typography
                      component="span"
                      color="primary.light"
                      fontSize="14px"
                    >
                      NEU
                    </Typography>
                  </Typography>
                  <Typography color="white" fontSize="14px" mb="8px">
                    Available: Mined: new{" "}
                    {Intl.NumberFormat("en-US").format(4365)}{" "}
                    <Typography
                      component="span"
                      color="secondary.main"
                      fontSize="14px"
                    >
                      PRO
                    </Typography>
                  </Typography>
                  <Button variant="contained">
                    Withdrawl
                    <ArrowRightAltOutlinedIcon />
                  </Button>
                  <Typography
                    fontSize="14px"
                    color="white"
                    fontWeight="600"
                    textAlign="center"
                    mt="4px"
                  >
                    2d 3h
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className="card-desc"
            sx={{
              mb: { xs: "24px", lg: 0 },
              mt: { xs: 0, lg: "16px" },
              maxWidth: { xs: "100%", lg: "300px" },
              backgroundColor: "primary.light",
            }}
          >
            <Box
              className="card-desc-content"
              sx={{ backgroundColor: "common.black" }}
            >
              <Typography
                variant="h2"
                fontFamily="Audiowide"
                fontSize="20px"
                mb="24px"
                className="card-desc-title"
              >
                Proton spin history
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                4
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                3
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                4
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                6
              </Typography>
              <Typography
                variant="inherit"
                fontFamily="LucidaSans"
                color="secondary.main"
              >
                7 (1 Proton Mined) #38
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                0
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                2
              </Typography>
              <Typography
                variant="inherit"
                fontFamily="LucidaSans"
                color="secondary.main"
              >
                7 (1 Proton Mined) #35
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                4
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                2
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                3
              </Typography>
              <Typography
                variant="inherit"
                fontFamily="LucidaSans"
                color="secondary.main"
              >
                7 (1 Proton Mined) #34
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                9
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                9
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                0
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                8
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                5
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                5
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                6
              </Typography>
              <Typography
                variant="inherit"
                fontFamily="LucidaSans"
                color="secondary.main"
              >
                7 (1 Proton Mined) #5
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                1
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                1
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                3
              </Typography>
              <Typography variant="inherit" fontFamily="LucidaSans">
                4
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Mining;
