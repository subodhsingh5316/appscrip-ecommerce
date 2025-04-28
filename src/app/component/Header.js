'use client';
import { Box, Typography,Stack, Divider } from "@mui/material"
import Image from "next/image";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ()=>{
    const theme = useTheme();
     const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <>
        {isMobile?(
            <>
            <nav className="border border-[#F1F1F1]">
            <Box sx={{display:"flex",p:1,backgroundColor:"black",color:"#EB4C6B",justifyContent:"center"}}>
                   <Image src="/stock/element.svg" width={20} height={20} alt="element" />
                   <p className="ml-2">Lorem ipsum dolor</p> 
            </Box>
            <Stack direction="row" sx={{justifyContent:"space-between",p:2}}>
             <Stack direction="row" spacing={1}>
             <MenuIcon size={40}/>
             <Image src="/stock/Logo.svg" alt="logo" width={25} height={25} />
             </Stack>
             <Typography component={"h1"} sx={{fontWeight:900}}>LOGO</Typography>
             <Stack direction="row" spacing={2}>
             <Image src="/stock/search-normal.svg" alt="search" width={20} height={20} />
             <Image src="/stock/heart.svg" alt="heart" width={20} height={20} />
             <Image src="/stock/bag.svg" alt="bag" width={20} height={20} />
             </Stack>
            </Stack>
        </nav>
        <Stack sx={{p:2}} direction ="row"divider={<Divider orientation="vertical" flexItem />}
  spacing={2}>
            <Typography component={"p"} sx={{color:"gray"}}>HOME</Typography>
            <Typography component={"p"}>SHOP</Typography>
        </Stack>
            </>
        ):(
            <Box >
            <nav className="h-[10vh] bg-dark">
                <Box sx={{display:"flex", backgroundColor:"black",color:"#EB4C6B",justifyContent:"space-around"}}>
                <Box sx={{display:"flex",margin:1}}>
                   <Image src="/stock/element.svg" width={20} height={20} alt="" />
                   <p className="ml-2">Lorem ipsum dolor</p> 
                </Box>
                <Box sx={{display:"flex",margin:1}}>
                   <Image src="/stock/element.svg" width={20} height={20} alt="" />
                   <p className="ml-2">Lorem ipsum dolor</p> 
                </Box>
                <Box sx={{display:"flex",margin:1}}>
                   <Image src="/stock/element.svg" width={20} height={20} alt="" />
                   <p className="ml-2">Lorem ipsum dolor</p> 
                </Box>
                </Box>
                <Box sx={{height:"10vh", display: "flex",padding:3}}> 
                    <Box sx={{width:"60%",height:"10vh",display:"flex",justifyContent:"space-between"}}>
                    <Box sx={{width:"25%",textAlign:"center", marginLeft:"20px"}}>
                        <Image
                        src="/stock/Logo.svg"
                        alt="logo"
                        width={40}
                        height={40}
                        />
                    </Box>
                    <Box sx={{width:"25%"}}>
                        <Typography component={"h1"} sx={{fontSize:28,fontWeight:800}} >LOGO</Typography>
                    </Box>
                    </Box>
                    <Box sx={{width:"40%",display:"flex", height:"20vh",justifyContent:"right",padding:"15px"}} >
                        <span className="mx-3"><Image src={"/stock/search-normal.svg"} width={20} height={20} alt={"search-normal"} /></span>
                        <span className="mx-3"><Image src={"/stock/heart.svg"} width={20} height={20} alt={"heart"} /></span>
                        <span className="mx-3"><Image src={"/stock/bag.svg"} width={20} height={20} alt={"beg"} /></span>
                        <span className="mx-3"><Image src={"/stock/profile.svg"} width={20} height={20} alt={"profile"} /></span>
                        <span className="mx-3"><strong>ENG</strong><ExpandMoreIcon/></span>
                    </Box>
                </Box>
                <Box  sx={{width:"50%",display:"flex",marginLeft:"30%",marginTop:"3%",gap:4}}>
                    <Typography sx={{fontWeight:600}} component={"p"}>SHOP</Typography>
                    <Typography sx={{fontWeight:600}} component={"p"}>SKILL</Typography>
                    <Typography sx={{fontWeight:600}} component={"p"}>STORIES</Typography>
                    <Typography sx={{fontWeight:600}} component={"p"}>ABOUT</Typography>
                    <Typography sx={{fontWeight:600}} component={"p"}>CONTECT US</Typography>
                </Box>
            </nav>
        </Box>
        )}
        </>
        
    )
}
export default Header;