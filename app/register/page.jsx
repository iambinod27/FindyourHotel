import Image from "next/image"
import RegisterForm from "./components/RegisterForm"

const register = () => {
    return (
        <div>
            <div className="mx-auto container py-[80px]">
                <div className="flex  gap-[10px]">
                    <div className="max-w-[600px]">
                        <Image src="https://images.pexels.com/photos/4327646/pexels-photo-4327646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" unoptimized width={1000} height={1000} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="text-[48px] font-[700] mx-auto leading-none  px-[20px] mb-[10px]">Brace yourself for exploration.</h3>

                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default register