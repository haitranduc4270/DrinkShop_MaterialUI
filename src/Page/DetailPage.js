import { Box } from "@mui/material";
import { Header } from '../Layout/Header';
import { Footer } from '../Layout/Footer';
import { ProductDetail } from '../Component/ProductDetail/index.js'

export const DetailPage = function () {

    return (
        <Box>
            <Header/>
            <ProductDetail/>
            <Footer/>
        </Box>
    )

}