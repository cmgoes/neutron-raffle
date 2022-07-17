import { Box, Container, Typography } from "@mui/material";
import "./stake-info.scss";

const StakeInfo = () => {
  return (
    <Box
      sx={{ backgroundColor: "primary.main" }}
      className="stake-info-container"
    >
      <Container maxWidth="xl" sx={{ py: "24px" }}>
        <Box px="24px">
          <Typography
            fontFamily="Audiowide"
            mb="32px"
            sx={{ fontSize: { xs: "24px", md: "28px" } }}
          >
            Stake your Tron NFT's
          </Typography>
          <Typography fontSize="18px" mb="16px">
            Earn Neutron and Proton tokens by staking your Tron NFT’s! Staked
            NFT’s have a chance of winning over 10,000 Tron depending on the
            size of the Jackpot!
          </Typography>
          <Typography fontSize="18px" mb="16px">
            Minimum staking peirod 7 days, with no maximum duration. Each NFT
            Mines Neutron at different rates. (see mining points chart)
          </Typography>
          <Typography fontSize="18px" mb="16px">
            Each NFT accumulates Neutron tokens over time and must be claimed
            once every 72 hours or they will stop mining for you.
          </Typography>
          <Typography fontSize="18px" mb="16px">
            You earn Proton Spins every time you sucessfully claim your mined
            Neutron. 1 Proton Spin for every NFT you have staked.
          </Typography>
          <Typography fontSize="18px" mb="32px">
            There is a Fee of 2 Tron per NFT staked in order to claim mined
            Neutron. (See fees on Mining Points Page)
          </Typography>
          <Box className="card-info">
            <Box className="card-info-item">
              <Typography className="card-info-item-title">
                Global NFTs Staked
              </Typography>
              <Typography
                className="card-info-item-value"
                color="secondary.main"
              >
                82
              </Typography>
            </Box>
            <Box className="card-info-item">
              <Typography className="card-info-item-title">
                You've staked
              </Typography>
              <Typography
                className="card-info-item-value"
                color="secondary.main"
              >
                2 NFT's
              </Typography>
            </Box>
            <Box className="card-info-item">
              <Typography className="card-info-item-title">
                Total Neutron Mined
              </Typography>
              <Typography
                className="card-info-item-value"
                color="secondary.main"
              >
                34
              </Typography>
            </Box>
            <Box className="card-info-item">
              <Typography className="card-info-item-title">
                Total Proton Mined
              </Typography>
              <Typography
                className="card-info-item-value"
                color="secondary.main"
              >
                53
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StakeInfo;
