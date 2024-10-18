import Image from "next/image"
import spinner from "../assets/spinner.svg"

const Spinner = ({ width, height }) => {
    return (
        <Image src={spinner} alt="picture"
            unoptimized
            width={width}
            height={height}
        />
    )
}
export default Spinner