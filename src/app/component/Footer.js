
'use client';

import { 
    Box, 
    Grid, 
    Typography, 
    TextField, 
    Button, 
    Divider, 
    Stack ,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme, useMediaQuery } from '@mui/material';


export default function Footer() {
    const theme = useTheme();
     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
    {isMobile ? (
  <>
     <Grid container spacing={4} sx={{ backgroundColor: 'black', color: 'white', p: 2, mt: 3,justifyContent:"space-around" }} >
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            BE THE FIRST TO KNOW
          </Typography>
          <Typography variant="body2" mb={2}>
            Sign up for updates from mettā muse.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              placeholder="Enter your e-mail..."
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
                flexGrow: 1,
              }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: 'gray', color: 'white', borderRadius: 1 }}
            >
              SUBSCRIBE
            </Button>
          </Box>
        </Grid>

        {/* Contact + Currency */}
        <Grid item xs={12} md={4} sx={{borderBottom:"1px solid white",borderTop:"1px solid white"}}>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Call US
          </Typography>
          <Typography variant="body2" mb={1}>
            +44 221 133 5360 {" "} customercare@mettamuse.com
          </Typography>

          <Typography variant="h6" fontWeight="bold" mb={1}>
            CURRENCY
          </Typography>
          <Stack direction="row" spacing={1}>
         <Image src="/stock/american.svg" width={20} height={20} alt="american" />
          <Typography variant="body2" mb={1} sx={{dispaly:"flex"}}>
            USD
          </Typography>
          </Stack>
          <Typography variant="caption" color="gray">
            Transactions will be completed in Euros and currency reference is available on Hover.
          </Typography>
        </Grid>

      </Grid>
    {/* Mobile View - Accordions */}
    <Box sx={{p:2,backgroundColor:"black"}}>
    <Accordion sx={{ backgroundColor: 'black', color: 'white',borderBottom:"1px solid white", }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
        <Typography fontWeight="bold">metta muse</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" mb={1}>About Us</Typography>
        <Typography variant="body2" mb={1}>Stories</Typography>
        <Typography variant="body2" mb={1}>Artisans</Typography>
        <Typography variant="body2" mb={1}>Boutiques</Typography>
        <Typography variant="body2" mb={1}>Contact Us</Typography>
        <Typography variant="body2">EU Compliances Docs</Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion sx={{ backgroundColor: 'black', color: 'white',borderBottom:"1px solid white" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
        <Typography fontWeight="bold">QUICK LINKS</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" mb={1}>Orders & Shipping</Typography>
        <Typography variant="body2" mb={1}>Join/Login as Seller</Typography>
        <Typography variant="body2" mb={1}>Payment & Pricing</Typography>
        <Typography variant="body2" mb={1}>Return & Refunds</Typography>
        <Typography variant="body2" mb={1}>FAQs</Typography>
        <Typography variant="body2" mb={1}>Privacy Policy</Typography>
        <Typography variant="body2">Terms & Conditions</Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion sx={{ backgroundColor: 'black', color: 'white',borderBottom:"1px solid white" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
        <Typography fontWeight="bold">FOLLOW US</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Image src="/stock/Insta.svg" width={24} height={24} alt="Instagram" />
          <Image src="/stock/linkdeen.svg" width={24} height={24} alt="linkdeen" />
        </Box>
      </AccordionDetails>
    </Accordion>
    </Box>
  </>
) : (
    <Box sx={{ backgroundColor: 'black', color: 'white', p: 5, mt: 5 ,justifyContent:"space-around"}}>

<Grid container spacing={4} sx={{marginLeft:{xs:"1%",  md:"7%"}}}>
  <Grid item xs={12} md={5}>
    <Typography variant="h6" fontWeight="bold" mb={2}>
      BE THE FIRST TO KNOW
    </Typography>
    <Typography variant="body2" mb={2}>
      Sign up for updates from mettā muse.
    </Typography>
    <Box sx={{ display: 'flex', gap: 1, justifyContent: "center", flexWrap: "wrap" }}>
      <TextField
        placeholder="Enter your e-mail..."
        variant="outlined"
        size="small"
        sx={{
          backgroundColor: 'white',
          borderRadius: 1,
          flexGrow: { xs: 1, md: 0 },
          minWidth: { xs: '200px', md: '250px' },
        }}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: 'gray', color: 'white', borderRadius: 1, height: '40px' }}
      >
        SUBSCRIBE
      </Button>
    </Box>
  </Grid>

  <Grid item xs={12} md={5} sx={{marginLeft: {xs:"1%", md:"20%"}}}>
    <Typography variant="h6" fontWeight="bold" mb={2}>
      CONTACT US
    </Typography>
    <Typography variant="body2" mb={1}>
      +44 221 133 5360
    </Typography>
    <Typography variant="body2" mb={2}>
      customercare@mettamuse.com
    </Typography>

    <Typography variant="h6" fontWeight="bold" mb={1}>
      CURRENCY
    </Typography>
    <Stack direction="row" spacing={1} alignItems="center" mb={1}>
      <Image src="/stock/american.svg" width={20} height={20} alt="american" />
      <Typography variant="body2">
        USD
      </Typography>
    </Stack>
    <Typography variant="caption" color="gray" display="block">
      Transactions will be completed in Euros and currency reference is available on Hover.
    </Typography>
  </Grid>
</Grid>


      <Divider sx={{ my: 4, borderColor: 'gray' }} />
      <Grid container spacing={4} sx={{justifyContent:"space-around"}}>
        <Grid item xs={6} md={3}>
          <Typography fontWeight="bold" mb={2}>
          mettā muse
          </Typography>
          <Typography variant="body2" mb={1}>About Us</Typography>
          <Typography variant="body2" mb={1}>Stories</Typography>
          <Typography variant="body2" mb={1}>Artisans</Typography>
          <Typography variant="body2" mb={1}>Boutiques</Typography>
          <Typography variant="body2" mb={1}>Contact Us</Typography>
          <Typography variant="body2">EU Compliances Docs</Typography>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={6} md={3}>
          <Typography fontWeight="bold" mb={2}>
            QUICK LINKS
          </Typography>
          <Typography variant="body2" mb={1}>Orders & Shipping</Typography>
          <Typography variant="body2" mb={1}>Join/Login as Seller</Typography>
          <Typography variant="body2" mb={1}>Payment & Pricing</Typography>
          <Typography variant="body2" mb={1}>Return & Refunds</Typography>
          <Typography variant="body2" mb={1}>FAQs</Typography>
          <Typography variant="body2" mb={1}>Privacy Policy</Typography>
          <Typography variant="body2">Terms & Conditions</Typography>
        </Grid>

        {/* Column 3 */}
        <Grid item xs={12} md={3}>
          <Typography fontWeight="bold" mb={2}>
            FOLLOW US
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Replace with your icons */}
            <Image src="/stock/Insta.svg" width={24} height={24} alt="Instagram" />
            <Image src="/stock/linkdeen.svg" width={24} height={24} alt="linkdeen" />
          </Box>

          <Typography fontWeight="bold" mt={4} mb={2}>
            metta muse ACCEPTS
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {/* Replace with your payment icons */}
            <Image src="/stock/gpay.svg" width={40} height={24} alt="GPay" />
            <Image src="/stock/matercard.svg" width={40} height={24} alt="matercard" />
            <Image src="/stock/paypal.svg" width={40} height={24} alt="paypal" />
            <Image src="/stock/amex.svg" width={40} height={24} alt="amex" />
            <Image src="/stock/applepay.svg" width={40} height={24} alt="applepay" />
            <Image src="/stock/opay.svg" width={40} height={24} alt="opay" />
          </Box>
        </Grid>

      </Grid>

      {/* Bottom Copyright */}
      <Box textAlign="center" mt={4} fontSize="12px" color="gray">
        Copyright © 2023 mettamuse. All rights reserved.
      </Box>

    </Box>
)}
    </>
  );
}

