import { Navigate, Route, Routes } from "react-router-dom";
import { RestaurantPage } from "../pages/RestaurantPage";

export const RestaurantRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RestaurantPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
