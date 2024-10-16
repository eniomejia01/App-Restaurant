import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { RestaurantLayout } from "../layout/RestaurantLayout";
import { Box, Container, Grid2 } from "@mui/material";
import { RestaurantContent } from "../layout/RestaurantContent";

export const Menu = () => {
    return (
        <>
            <Container maxWidth="lg">
                {" "}
                {/* Añadido Container para centrar todo el contenido */}
                <Box
                    
                >
                    <RestaurantContent/>
                </Box>
            </Container>
        </>
    );
}
