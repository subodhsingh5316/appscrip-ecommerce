
import dynamic from "next/dynamic";
import {Box,Typography} from "@mui/material"
import Head from "next/head";

const Header = dynamic(() => import("./component/Header"));
const Footer = dynamic(() => import("./component/Footer"));
const ProductList = dynamic(() => import("./component/ProductList"));
export default function Home() {
  return (
    <div>
      <Head>
        <title>Buy the Best Products | Metta Muse</title>
        <meta name="description" content="Discover premium products at Metta Muse. Shop fashion, accessories, and more with global delivery!" />
      </Head>
      <main>
      <header>
      <Header />
      </header>
        <Box sx={{ display:"flex",  marginTop:{xs:2,md:2}}}>
         <ProductList/>
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
