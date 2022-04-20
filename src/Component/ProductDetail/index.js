import { styled }from '@mui/material/styles';
import { Button } from '@mui/material';
import { Thumbnail } from "./Thumbnail";
import { Name } from './Name';
import { Cost } from './Cost';
import { PropertyBar } from './PropertyBar';
import React from "react";

const LayoutProduct = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    padding: '10%',

})
const ProducInfo = styled('div')({
    marginLeft: 100,
})
    

const thumbnailSource = "https://static.wixstatic.com/media/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg/v1/fill/w_306,h_408,al_c,q_80,usm_0.66_1.00_0.01/c837a6_36adfb820f064400b84353c8cca75209~mv2.webp";
const ColorValues = ["Màu xanh", "Màu đỏ", "Màu vàng", "Mày đen", "Màu xanh", "Màu đỏ", "Màu vàng", "Mày đen"];
const sizeValues = ["S", "M", "XS", "M", "L", "XL", "XXL", "XXXL"];
const state = "Còn hàng"

export function ProductDetail () {
    return (
        <div>
            <LayoutProduct>
                <Thumbnail src={thumbnailSource}></Thumbnail>
                <ProducInfo>
                    <Name>Lọ nước màu xanh không chắc là cái gì</Name>
                    <Cost></Cost>
                    <PropertyBar name="Màu sắc : " value={ColorValues}></PropertyBar>
                    <PropertyBar name="Kích cỡ : " value={sizeValues}></PropertyBar>
                    <PropertyBar name="Trạng Thái : " value={state} type="state"></PropertyBar>
                    <Button variant='outlined' sx={{
                        color: 'rgb(61,90,35)',
                        backgroundColor: 'white',
                        height: '50px',
                        fontSize: '15pt',
                        fontFamily: "'Times New Roman', Times, serif",
                        width: 300,
                        marginRight: 20,

                        '&:hover' : {
                            color: 'white',
                            backgroundColor: 'rgb(61,90,35)',
                        }
                    }}>
                        Thêm vào giỏ hàng
                    </Button>
                    <Button variant='outlined' sx={{
                        color: 'white',
                        backgroundColor: 'rgb(61,90,35)',
                        height: '50px',
                        fontSize: '15pt',
                        fontFamily: "'Times New Roman', Times, serif",
                        width: 300,
                        marginRight: 20,

                        '&:hover' : {
                            color: 'rgb(61,90,35)',
                            backgroundColor: 'white',
                        }
                    }}>
                        Mua ngay
                    </Button>
                </ProducInfo>
            </LayoutProduct>
        </div>
    )
}  
