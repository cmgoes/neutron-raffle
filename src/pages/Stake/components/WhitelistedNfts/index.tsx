import { Box, Container, Typography, Table, TableBody } from "@mui/material";
import WhitelistedItem from "./WhitelistedItem";
import "./whitelisted-nfts.scss";

const WhitelistedNfts = () => {
  return (
    <Box sx={{ backgroundColor: "common.black" }}>
      <Container maxWidth="xl" sx={{ py: "24px" }}>
        <Box
          className="whitelisted-nfts-content"
          sx={{
            backgroundColor: "secondary.light",
          }}
        >
          <Box mb="24px">
            <Typography
              fontFamily="Audiowide"
              color="white"
              sx={{ fontSize: { xs: "24px", md: "28px" } }}
            >
              Available Whitelisted NFT's
            </Typography>
          </Box>
          <Box className="table-container">
            <Table sx={{ minWidth: 450 }}>
              <TableBody>
                {Array.from(Array(5)).map((_, key) => (
                  <WhitelistedItem key={key} />
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhitelistedNfts;
