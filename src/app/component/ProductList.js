"use client";
import dynamic from "next/dynamic"
import { useEffect, useState } from 'react';
import { Grid, Container,Box, Typography,MenuItem, Select, FormControl, Stack, Divider } from '@mui/material';
import axios from "axios";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const ProductCard = dynamic(() => import("./ProductCard"));
const Sidebar = dynamic(()=>import("./Sidebar"))
import { useTheme, useMediaQuery } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductList = () => {
    const theme = useTheme();
     const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(true);
    const [loader, setLoader] = useState(true)
    const toggleSidebar = () => {
        setShow((prev) => !prev);
      };

    const getData =async()=>{
        const res = await axios.get("https://fakestoreapi.com/products")
        setProduct(res.data)
    }
    useEffect(() => {
        getData()
        setLoader(false)
    },[])
    const [sortOption, setSortOption] = useState('RECOMMENDED');

    const handleChange = (event) => {
      setSortOption(event.target.value);
    };
    return (
      <>
        {loader ? (
          <h1 className="my-[30vh] mx-auto text-bold">Loading...</h1>
        ) : (
          <>
            {isMobile ? (
              <>
                <Stack direction={"column"}>
                  <Box
                    sx={{
                      paddingTop: { sm: "15px" },
                      padding: { xs: 2 },
                      color: { lg: "black" },
                      width: { lg: "50%", xs: "100%" },
                      margin: "0 auto", // Center horizontally
                      textAlign: "center", // Center text
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      component="h1"
                      sx={{
                        fontSize: { lg: "38px", xs: "24px", sm: "30px" }, // Better sizing for tablet
                        fontWeight: 600,
                        textAlign: "center",
                        mb: 2,
                      }}
                    >
                      DISCOVER OUR PRODUCTS
                    </Typography>

                    <Typography
                      component="p"
                      sx={{
                        fontSize: { xs: "14px", sm: "16px" },
                        maxWidth: "600px", // Optional: to limit paragraph width
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Amet est posuere
                      rhoncus scelerisque. Dolor integer scelerisque nibh amet
                      mi ut elementum dolor.
                    </Typography>
                  </Box>

                  <Stack
                    sx={{
                      borderBottom: "1px solid #e0e0e0",
                      borderTop: "1px solid #e0e0e0",
                      width: "100%",
                    }}
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    <Typography
                      fontWeight="bold"
                      sx={{ minWidth:  {xs:"35%",  sm:"50%"}, textAlign: "center", pt: 1 }}
                      onClick={toggleSidebar}
                    >
                      FILTER
                    </Typography>
                    <Box sx={{ minWidth: 100 }}>
                      <FormControl fullWidth size="small">
                        <Select
                          value={sortOption}
                          onChange={handleChange}
                          displayEmpty
                          sx={{
                            fontWeight: 700,
                            "& .MuiSelect-select": { padding: "8px" },
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "none",
                            },
                            boxShadow: "none",
                          }}
                        >
                          <MenuItem value="RECOMMENDED">
                            <Typography fontWeight="bold">
                              RECOMMENDED
                            </Typography>
                          </MenuItem>
                          <MenuItem value="NEWEST">NEWEST FIRST</MenuItem>
                          <MenuItem value="POPULAR">POPULAR</MenuItem>
                          <MenuItem value="HIGH_TO_LOW">
                            PRICE : HIGH TO LOW
                          </MenuItem>
                          <MenuItem value="LOW_TO_HIGH">
                            PRICE : LOW TO HIGH
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Stack>
                  {!show && <Sidebar />}
                  <Container sx={{ mt: 2 }}>
                    <Grid container justifyContent="center">
                      <Grid item xs={12} md={9}>
                        <Grid container spacing={4} justifyContent="center">
                          {/* Product Cards */}
                          {product.map((item, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                              <ProductCard item={item} index={index} />
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Stack>
              </>
            ) : (
              <Box>
                <Box
                  sx={{
                    paddingTop: { sm: "150px" },
                    padding: { xs: 2 },
                    color: { lg: "black" },
                    width: { lg: "50%", sm: "100%" },
                    marginLeft: { sm: "30%", md: "30%" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { lg: "38px", xs: "18px" },
                      fontWeight: { xs: 600 },
                    }}
                    component="h1"
                  >
                    DISCOVER OUR PRODUCTS
                  </Typography>
                  <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere
                    rhoncus scelerisque. Dolor integer scelerisque nibh amet mi
                    ut elementum dolor.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", marginLeft: "10%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                        {product?.length} ITEMS
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="grey"
                        fontWeight="bold"
                        mb={2}
                        sx={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onClick={toggleSidebar}
                      >
                        {show ? (
                          <>
                            <KeyboardArrowLeftIcon /> HIDE FILTER
                          </>
                        ) : (
                          <>
                            <ArrowForwardIosIcon /> SHOW FILTER
                          </>
                        )}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ minWidth: 200 }}>
                    <FormControl fullWidth size="small">
                      <Select
                        value={sortOption}
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                          fontWeight: 700,
                          "& .MuiSelect-select": { padding: "8px" },
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          boxShadow: "none",
                        }}
                      >
                        <MenuItem value="RECOMMENDED">
                          <Typography fontWeight="bold">RECOMMENDED</Typography>
                        </MenuItem>
                        <MenuItem value="NEWEST">NEWEST FIRST</MenuItem>
                        <MenuItem value="POPULAR">POPULAR</MenuItem>
                        <MenuItem value="HIGH_TO_LOW">
                          PRICE : HIGH TO LOW
                        </MenuItem>
                        <MenuItem value="LOW_TO_HIGH">
                          PRICE : LOW TO HIGH
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  {show ? <Sidebar /> : null}
                  <Container>
                    <Grid container spacing={show ? 4 : 2}>
                      <Grid item xs={12} md={show ? 9 : 12}>
                        <Grid container spacing={show ? 4 : 2}>
                          {product.map((item, index) => (
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={show ? 4 : 3}
                              key={index}
                            >
                              <ProductCard item={item} index={index} />
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Box>
              </Box>
            )}
          </>
        )}
      </>
    );
}

export default ProductList;