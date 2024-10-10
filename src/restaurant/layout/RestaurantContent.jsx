import { Box, Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { cardData } from "../../assets/data";



export const RestaurantContent = () => {
    return (
        <>
            <Box sx={{ width: "100%", mb: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Especialidades del día
                </Typography>
            </Box>

            <Grid2 container spacing={1} columns={{ xs: 6, sm: 6, md: 12 }}>
                {cardData.map((item) => (
                    <Grid2 key={item.id} xs={6} sm={6} md={3} lg={4} size={ { xs: 3, sm: 3, md: 3, lg: 4} }>
                        <Card
                            sx={{
                                mx: "auto",
                                mb: 2,
                                maxWidth: { xs: "100%", sm: 345 },
                            }}
                        >
                            <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        // height="100"
                                        image={`/src/assets/${item.image}.jpg`}
                                        alt={item.title}
                                        sx={{ height: { xs: 100, sm: 100, md: 190 }, objectFit: 'cover' }}
                                    />
                                    <CardContent>
                                        <Typography 
                                            gutterBottom 
                                            variant="h7" 
                                            component="div" 
                                            sx={{ 
                                                color: '#E9967A', 
                                                fontWeight: 'bold',
                                                display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 1,
                                            }} 
                                        >
                                            <span>{item.title}</span>
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            // color="text.secondary"
                                            sx={{
                                                display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 2,
                                                color: '#424949'

                                            }}
                                            
                                        >
                                            {item.description} 
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            {/* Contenido de la card */}
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </>
    );
};
