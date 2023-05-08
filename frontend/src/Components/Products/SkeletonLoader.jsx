import React from 'react'
import { Grid, Skeleton, Box } from "@chakra-ui/react";
import watermark from"./watermark.png"
const SkeletonLoader = () => {
    
    const loader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18];
  return (
    <Grid
      m="20px 10px"
      templateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)"
      }}
      height="50px"
      gap={6}
      position="relative" 
    >
      {loader.map((e) => (
        <Box
          key={e}
          position="relative"
        >
          <Skeleton
            width="100%"
            height="400px"
            isLoaded={false}
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            pointerEvents="none" 
            zIndex="1" 
            opacity="0.5" 
          >
            <img
              src={watermark} 
              alt="Watermark"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain", 
              }}
            />
          </Box>
          <Box>hello react !</Box>
        </Box>
      ))}
    </Grid>
  )
  
}

export default SkeletonLoader

