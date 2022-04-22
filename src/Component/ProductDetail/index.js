import { styled }from '@mui/material/styles';
import { Button, Box, useTheme } from '@mui/material';
import { Cost } from './Cost';
import { PropertyBar } from './PropertyBar';
import React from "react";

const LayoutProduct = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection:'row',
    padding: '10%',
    marginBottom: 200,

    [theme.breakpoints.down('lg')] : {
        flexDirection: 'column',
    }
}))

const ProducInfo = styled('div')(({ theme }) => ({
    marginLeft: 100,
    marginTop: 40,
    
    [theme.breakpoints.down('lg')] : {
        margin: 0,
        marginTop: 40,
    }
}))
    
const Name = styled('div')({
    fontSize: '20pt',
    marginBottom: 15,
    fontFamily: "'Times New Roman', Times, serif",
})


const thumbnailSource = "https://static.wixstatic.com/media/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg/v1/fill/w_306,h_408,al_c,q_80,usm_0.66_1.00_0.01/c837a6_36adfb820f064400b84353c8cca75209~mv2.webp";
const ColorValues = ["Màu xanh", "Màu đỏ", "Màu vàng", "Mày đen", "Màu xanh", "Màu đỏ", "Màu vàng", "Mày đen"];
const sizeValues = ["S", "M", "XS", "M", "L", "XL", "XXL", "XXXL"];
const state = "Còn hàng"
const cost = {
    from: '700.000',
    to: '800.000',
}


export function ProductDetail (props) {
    const theme = useTheme();
    console.log(theme);
    return (
        <div>
            <LayoutProduct>
                <Box component='img' maxHeight={420} width={320} src={thumbnailSource} sx={{
                    [theme.breakpoints.down('sm')]: {
                        width: '90%',
                        maxHeight: '100%',
                        padding: '5%',

                    }
                }}></Box>
                <ProducInfo>    
                    <Box component='div' sx={{
                        fontSize: '20pt',
                        marginBottom: 15,
                        fontFamily: "'Times New Roman', Times, serif",
                    }}>
                        Lọ nước màu xanh không chắc là cái gì
                    </Box>
                    <Cost cost={cost}></Cost>
                    <PropertyBar name="Màu sắc : " value={ColorValues}></PropertyBar>
                    <PropertyBar name="Kích cỡ : " value={sizeValues}></PropertyBar>
                    <PropertyBar name="Trạng Thái : " value={state} type="state"></PropertyBar>
                    <Button variant='outlined' sx={{
                        color:'primary.main',
                        backgroundColor: 'white',
                        height: '50px',
                        fontSize: '15pt',
                        fontFamily: "'Times New Roman', Times, serif",
                        width: 300,
                        mr: 20,
                        mb: 20,

                        '&:hover' : {
                            color: 'primary.dark',
                        }
                    }}>
                        Thêm vào giỏ hàng
                    </Button>
                    <Button variant='outlined' sx={{
                        color: 'white',
                        backgroundColor: 'primary.main',
                        height: '50px',
                        fontSize: '15pt',
                        fontFamily: "'Times New Roman', Times, serif",
                        width: 300,
                        mr: 20,
                        mb: 20,

                        '&:hover' : {
                            color: 'primary.dark',
                        }
                    }}>
                        Mua ngay
                    </Button>
                </ProducInfo>
            </LayoutProduct>
        </div>
    )
}  
