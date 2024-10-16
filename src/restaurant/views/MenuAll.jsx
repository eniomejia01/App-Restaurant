import { Box, Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { CardRestaurant } from "../components/CardRestaurant";

export const MenuAll = () => {
    return (
        <>
        
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
                
            }}>
                <Typography variant="h5" fontSize={ 39 } fontWeight="bold">
                    Menú
                </Typography>
            </Box>

            <CardRestaurant/>
        
        
        </>
    )
}
