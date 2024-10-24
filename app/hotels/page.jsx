import Breadcrumb from "@/components/Breadcrumb"
import HotelList from "./components/HotelList"

const hotels = () => {
    return (
        <div className="container mx-auto py-[80px]">
            <Breadcrumb />
            <div className="grid grid-cols-3 gap-4">
                <HotelList />
            </div>
        </div>
    )
}
export default hotels