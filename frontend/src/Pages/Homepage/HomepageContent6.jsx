import React from "react";
import { Box, Image, Square, Link } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
const HomepageContent6 = ({ data, text }) => {
  return (
    <Box
      justifyContent="left"
      w="85%"
      m="auto"
      mt="6"
      cursor="pointer"
      fontSize="22px"
      pb="7"
      fontWeight="400"
    >
      {text}
      <hr />
      <Box mt="1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          style={{
            "--swiper-navigation-color": "#E5E4E2",
          }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((e) => (
            <Box key={e}>
              <SwiperSlide>
                <Link to={e.linked}>
                  <Square m="auto">
                    <Image
                      src={`${e.img}`}
                      alt={e.caption}
                      boxSize="160px"
                      w="80%"
                    />
                  </Square>
                </Link>
              </SwiperSlide>
            </Box>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default HomepageContent6;
