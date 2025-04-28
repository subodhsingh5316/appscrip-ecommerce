"use client";
import { useState } from 'react';
import { Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = (props) => {
  const { item, index } = props;
  const [liked, setLiked] = useState(false); 

  const handleHeartClick = () => {
    setLiked(!liked); 
  };

  return (
    <Card>
    <Box sx={{ marginLeft: {xs:"20%",lg:"20%"}, width: "150px",height:"20vh"}}>
      <Image
        src={item?.image}
        width={90}
        height={50}
        style={{  
          objectFit: "contain" 
        }}
        alt={item?.category}
      />
    </Box>
    <CardContent>
      <Typography
        sx={{
          width: "20ch",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          fontWeight: 700,
          mt:2
        }}
        variant="h6"
      >
        {item?.title}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ fontSize: "12px", color: "gray" }} component="p">
          <Link href={"/sign"}>Sign in</Link> or Create an account to see price
        </Typography>

        <Box sx={{ cursor: "pointer" }} onClick={() => handleHeartClick(index)}>
          <Image
            src={liked ? "/stock/heart-red.svg" : "/stock/heart.svg"}
            width={20}
            height={20}
            alt="heart"
          />
        </Box>
      </Box>
    </CardContent>
  </Card>
  );
};

export default ProductCard;
