import { Button, Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { dataMenuAll } from "../../assets/dataMenuAll";
import { Check, CheckBox } from "@mui/icons-material";
import { useState } from "react";



export const CardRestaurant = () => {

    const [selectedItems, setSelectedItems] = useState({});

    const handleAddItem = (itemId) => {
        setSelectedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    return (
        <div className="animate__animated animate__fadeIn">
            <Grid2 container spacing={1} columns={{ xs: 6, sm: 6, md: 12 }}>
                {dataMenuAll.map((item) => (
                    <Grid2 key={item.id} xs={6} sm={6} md={3} lg={4} size={ { xs: 3, sm: 3, md: 3, lg: 4} }>
                        <Card
                            sx={{
                                mx: "auto",
                                mb: 2,
                                maxWidth: { xs: "100%", sm: 345 },
                            }}
                            key={item.id}
                        >
                            <div>


                                <CardActionArea>
                                    <div>
                                        {selectedItems[item.id] && (
                                            <div>
                                                <Check sx={{ 
                                                        width: 30,
                                                        height: 30,
                                                        position: 'absolute', 
                                                        marginTop: '0', 
                                                        marginRight: '0', 
                                                        backgroundColor: 'white', 
                                                        color: 'black',
                                                        borderRadius: 12,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        margin: .5,
                                                        padding: .5,
                                                        
                                                    }} 
                                                />
                                            </div>
                                        )}

                                    </div>
                                    <CardMedia
                                        component="img"
                                        // height="100"
                                        image={`/src/assets/${item.image}.webp`}
                                        alt={item.title}
                                        sx={{ height: { xs: 100, sm: 100, md: 190 }, objectFit: 'cover',  }}
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
                            </div>
                            {/* Contenido de la card */}
                            <Button 
                                variant="text" 
                                sx={{ 

                                    backgroundColor: 'red',
                                    color: 'white',
                                    mx: "auto",
                                    mb: 0,
                                    width: '100%',
                                    borderTopLeftRadius:'0',
                                    borderTopRightRadius: '0',
                                    '&:hover':{
                                        color:'#a93226',
                                    }
                                }}
                                onClick={() => handleAddItem(item.id)}
                            >
                                {selectedItems[item.id] ? 'Agregado' : 'Agregar'}
                            
                            </Button>
                        </Card>
                    </Grid2>
                ))} 
            </Grid2>


        </div>
    )
}

