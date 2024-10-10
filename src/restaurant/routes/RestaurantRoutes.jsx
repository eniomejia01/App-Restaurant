import { Navigate, Route, Routes } from "react-router-dom";
import { RestaurantLayout } from "../layout/RestaurantLayout";
import { Menu } from "../views/Menu";

export const RestaurantRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
