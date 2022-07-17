import { Box, Typography, TableRow, TableCell, Button } from "@mui/material";

import NftImage from "assets/images/item/1 snowman epiphany.png";

const StakedNftItem = () => {
  return (
    <>
      <TableRow
        sx={{
          backgroundColor: "common.black",
          "&:not(:first-child)": {
            borderTop: "3px solid #22274f",
          },
        }}
      >
        <TableCell sx={{ borderBottom: "none", width: "140px" }}>
          <Box
            component="img"
            src={NftImage}
            sx={{ width: "100%", aspectRatio: "1", borderRadius: "8px" }}
          />
        </TableCell>
        <TableCell sx={{ borderBottom: "none" }}>
          <Typography color="white" fontSize="14px" mb="4px">
            Staking since
          </Typography>
          <Typography
            color="white"
            fontSize="18px"
            fontFamily="Audiowide"
            mb="4px"
          >
            Feb 23, 2022
          </Typography>
          <Typography color="white" fontSize="14px" fontFamily="Audiowide">
            11:48 PM
          </Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: "none" }}>
          <Typography color="white" fontSize="14px" mb="4px">
            Unlocks on
          </Typography>
          <Typography
            color="white"
            fontSize="18px"
            fontFamily="Audiowide"
            mb="4px"
          >
            Feb 26, 2022
          </Typography>
          <Typography color="white" fontSize="14px" fontFamily="Audiowide">
            11:48 PM
          </Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: "none" }}>
          <Typography color="white" fontSize="14px" mb="4px">
            Mined Tokens
          </Typography>
          <Typography
            color="success.main"
            fontSize="16px"
            fontFamily="Audiowide"
            mb="8px"
          >
            0
          </Typography>
          <Box>
            <Button variant="contained" sx={{ mr: "8px" }}>
              Unstake
            </Button>
            <Button variant="contained">Claim</Button>
          </Box>
        </TableCell>
      </TableRow>
      <TableRow sx={{ backgroundColor: "common.black" }}>
        <TableCell colSpan={4} sx={{ p: "4px 16px", borderBottom: "none" }}>
          <Typography component="span" color="white" fontSize="14px" mr="16px">
            MP: 15000 1125N/HR
          </Typography>
          <Typography component="span" color="white" fontSize="14px" mr="16px">
            FOX #2181
          </Typography>
          <Typography component="span" color="white" fontSize="14px">
            RANK #2215
          </Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

export default StakedNftItem;
