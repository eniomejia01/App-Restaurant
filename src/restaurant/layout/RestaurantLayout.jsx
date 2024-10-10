import { Box, Container, Grid2 } from "@mui/material";
import { NavBar } from "../components";

export const RestaurantLayout = ({ children }) => {
    return (
        <Box
            sx={{
                // display: 'flex',
                // flexDirection: 'column',
                minHeight: '100vh', // Asegura que el layout ocupe al menos toda la altura de la ventana
                width: '100%',
            }}
        >
            {/* Navbar drawerWidth */}
            <NavBar />

            {/* Contenedor principal centrado */}

            <Box
                // component="main"
                // sx={{
                //     flexGrow: 1,
                //     width: '100%',
                //     py: 3
                // }}

                sx={{ py: 5}}
            >
                <Container maxWidth={false}>
                    {children}
                </Container>
            
            </Box>


        </Box>
    );
};

