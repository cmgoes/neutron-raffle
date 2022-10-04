import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import Item from "components/Item";
import nftImage1 from "assets/images/item/1 snowman epiphany.png";
import nftImage2 from "assets/images/item/2 robotron.png";
import nftImage3 from "assets/images/item/3 tpunk 3442.png";
import nftImage4 from "assets/images/item/4 justin baby turu.png";
import nftImage5 from "assets/images/item/5 justBAYC ape 4951.png";
import "./action-feed.scss";

const sliderItems = [
  {
    image: nftImage1,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: "N/A",
    verified: true,
    miningPoint: "K",
    minintPointColor: "black",
    buttonText: "MP: 15000",
    buttonSubText: "1125 P/HR",
  },
  {
    image: nftImage2,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: "N/A",
    verified: true,
    miningPoint: "K",
    minintPointColor: "black",
    buttonText: "MP: 9000",
    buttonSubText: "675 P/HR",
  },
  {
    image: nftImage3,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: 1,
    verified: true,
    miningPoint: "U",
    minintPointColor: "#ff7523",
    buttonText: "MP: 6000",
    buttonSubText: "450 P/HR",
  },
  {
    image: nftImage4,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: "N/A",
    verified: true,
    miningPoint: "K",
    minintPointColor: "black",
    buttonText: "MP: 5000",
    buttonSubText: "375 P/HR",
  },
  {
    image: nftImage5,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: 450,
    verified: true,
    miningPoint: "B",
    minintPointColor: "#6164ff",
    buttonText: "MP: 1500",
    buttonSubText: "112 P/HR",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  // autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ActionFeed = () => {
  return (
    <Box
      className="action-feed-container"
      sx={{
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        className="action-feed-desc"
        sx={{
          mb: { xs: "24px", md: 0 },
          mt: { xs: 0, md: "38px" },
          maxWidth: { xs: "100%", md: "300px" },
          backgroundColor: "primary.light",
        }}
      >
        <Box
          className="action-feed-desc-content"
          sx={{ backgroundColor: "common.black" }}
        >
          <Typography
            variant="h2"
            fontFamily="Audiowide"
            fontSize="20px"
            mb="24px"
            className="action-feed-desc-title"
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
            just hit 7 on the withdraw spin & won 1 Neutron token!
          </Typography>
          <Typography variant="inherit" fontFamily="LucidaSans" mb="8px">
            <Typography
              component="span"
              fontFamily="LucidaSans"
              color="primary.dark"
            >
              -bbryan927
            </Typography>{" "}
            claimed 349 Proton tokens!
          </Typography>
          <Typography variant="inherit" fontFamily="LucidaSans" mb="8px">
            <Typography
              component="span"
              fontFamily="LucidaSans"
              color="primary.dark"
            >
              -ceb888
            </Typography>{" "}
            claimed 76 Proton tokens!
          </Typography>
          <Typography variant="inherit" fontFamily="LucidaSans" mb="8px">
            <Typography
              component="span"
              fontFamily="LucidaSans"
              color="primary.dark"
            >
              -sally8
            </Typography>{" "}
            claimed 208 Proton tokens!
          </Typography>
        </Box>
      </Box>
      <Box
        className="action-feed-main"
        sx={{
          width: { xs: "100%", md: 0 },
        }}
      >
        <Typography
          fontFamily="Audiowide"
          color="white"
          fontSize="20px"
          mb="8px"
        >
          Rare NFT's Currently Mining
        </Typography>
        <Box
          className="slider-content"
          sx={{ backgroundColor: "primary.light" }}
        >
          <Slider {...settings}>
            {sliderItems.map((item, key) => (
              <Item
                key={key}
                image={item.image}
                nftName={item.nftName}
                collectionName={item.collectionName}
                nftId={item.nftId}
                // rank={item.rank}
                verified={item.verified}
                isSmall={true}
                miningPoint={item.miningPoint}
                minintPointColor={item.minintPointColor}
                buttonText={item.buttonText}
                buttonSubText={item.buttonSubText}
              />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default ActionFeed;
