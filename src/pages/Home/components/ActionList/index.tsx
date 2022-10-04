import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import Item from "components/Item";
import NeutronLogo from "assets/images/neutron-logo.png";
import nftImage1 from "assets/images/recent-item/1 BAYCtron 1069.png";
import nftImage2 from "assets/images/recent-item/2 CoolCat 9464.png";
import nftImage3 from "assets/images/recent-item/3 TMEEBIT 1900.png";
import nftImage4 from "assets/images/recent-item/4 tpunk 332.png";
import nftImage5 from "assets/images/recent-item/5 tronbull 4120.png";
import nftImage6 from "assets/images/recent-item/6 tpunk 2484.png";
import nftImage7 from "assets/images/recent-item/7 tpunk 3442.png";
import "./action-list.scss";

const sliderItems = [
  {
    image: nftImage1,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: 11362,
    verified: true,
    miningPoint: "B",
    minintPointColor: "green",
    buttonText: "MP: 40",
    buttonSubText: "3 P/HR",
  },
  {
    image: nftImage2,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: 7295,
    verified: true,
    miningPoint: "B",
    minintPointColor: "green",
    buttonText: "MP: 60",
    buttonSubText: "4.5 P/HR",
  },
  {
    image: nftImage3,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: 2104,
    verified: true,
    miningPoint: "K",
    minintPointColor: "#5164ff",
    buttonText: "MP: 200",
    buttonSubText: "15 P/HR",
  },
  {
    image: nftImage4,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: 2323,
    verified: true,
    miningPoint: "B",
    minintPointColor: "green",
    buttonText: "MP: 200",
    buttonSubText: "15 P/HR",
  },
  {
    image: nftImage5,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: 4395,
    verified: true,
    miningPoint: "B",
    minintPointColor: "green",
    buttonText: "MP: 60",
    buttonSubText: "4.5 P/HR",
  },
  {
    image: nftImage6,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: 7050,
    verified: true,
    miningPoint: "U",
    minintPointColor: "#6164ff",
    buttonText: "MP: 1000",
    buttonSubText: "75 P/HR",
  },
  {
    image: nftImage7,
    nftName: "Ghostface Gen 2",
    collectionName: "Ghostface",
    nftId: 4124,
    // rank: 5063,
    verified: true,
    miningPoint: "K",
    minintPointColor: "#ff7523",
    buttonText: "MP: 6000",
    buttonSubText: "450 P/HR",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 7,
  slidesToScroll: 1,
  initialSlide: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const ActionList = () => {
  return (
    <Box className="action-list-container">
      <Box className="carousel-content">
        <Typography
          fontFamily="Audiowide"
          color="white"
          fontSize="20px"
          mb="8px"
        >
          Most Recently Staked NFT's
        </Typography>
        <Box
          className="carousel"
          sx={{
            backgroundColor: "primary.light",
          }}
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
      <Box className="action-list-desc">
        <Typography variant="h3" className="action-list-desc-title">
          Let's get full picture...
        </Typography>
        <Box className="action-list-desc-item">
          <Box className="action-list-desc-icon">
            <Box component="img" src={NeutronLogo} />
          </Box>
          <Box>
            <Typography variant="h4" className="action-list-desc-subtitle">
              Mining Points
            </Typography>
            <Typography>
              Each NFT can mine Proton tokens at different rates based off the cost to mint 
              and amount of NFT’s in each collection. In most cases there are Base Mining Points 
              and then each month a few NFT’s in each collection will be selected to get a bonus 
              mining rate “Highest Mining Rate”. See “Mining Points” on other page.
            </Typography>
          </Box>
        </Box>
        <Box className="action-list-desc-item">
          <Box className="action-list-desc-icon">
            <Box component="img" src={NeutronLogo} />
          </Box>
          <Box>
            <Typography variant="h4" className="action-list-desc-subtitle">
              Tokenomics
            </Typography>
            <Typography>
              We have set up a token supply that is in complete control of the
              users and benefits people who help build Proton in its early
              stages! We have a 10-year mining plan in order to mine all
              21,000,000 Proton tokens. Neutron token mining is set up a little
              bit differently. Both Tokens can only be mined by staking NFT’s
              for time.
            </Typography>
          </Box>
        </Box>
        <Box className="action-list-desc-item">
          <Box className="action-list-desc-icon">
            <Box component="img" src={NeutronLogo} />
          </Box>
          <Box>
            <Typography variant="h4" className="action-list-desc-subtitle">
              Claiming and Withdraw Fees
            </Typography>
            <Typography>
              The fee's collected over time will allow for us to keep the
              project running and continue to build. We will be adding to swap
              liquidity, paying the running cost, artist and developers.
            </Typography>
          </Box>
        </Box>
        <Box className="action-list-desc-item">
          <Box className="action-list-desc-icon">
            <Box component="img" src={NeutronLogo} />
          </Box>
          <Box>
            <Typography variant="h4" className="action-list-desc-subtitle">
              Staking My NFT's
            </Typography>
            <Typography>
              Stake Popular Tron NFT's To Earn Neutron and Proton Tokens!
              Proton tokens will be used in our upcoming Lottey Marketplace.
              Neutron tokens will recieve a 1% weekly drop of any sale that
              occurs on the upcoming Lottey Marketplace and will be the only
              means to mint our upcoming NFT's.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ActionList;
