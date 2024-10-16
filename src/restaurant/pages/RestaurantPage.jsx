import { RestaurantLayout } from "../layout/RestaurantLayout"
import { Menu } from "../views/Menu"
import { MenuAll } from "../views/MenuAll"

export const RestaurantPage = () => {
    return (
        <RestaurantLayout>

            <Menu />

            <MenuAll/>

        </RestaurantLayout>
    )
}
