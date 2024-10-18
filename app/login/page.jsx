import LoginForm from "./components/LoginForm"

const Login = () => {
    return (
        <>
            <div className="mx-auto container py-[80px]">
                <h3 className="text-[48px] font-[700] max-w-[400px] mx-auto leading-tight mb-[20px] px-[20px]">Experience the world firsthand.</h3>
                <LoginForm />
            </div>
        </>
    )
}
export default Login