import { Navigate, Route, Routes } from "react-router-dom";
import { RestaurantRoutes } from "../restaurant/routes/RestaurantRoutes";

export const AppRouter = () => {



    return (
        <Routes>
            
            <Route path="/*" element={<RestaurantRoutes />} />
            

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
