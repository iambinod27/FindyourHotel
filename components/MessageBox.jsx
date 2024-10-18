const MessageBox = ({ Message }) => {
    return (
        <div className="flex items-center justify-center fixed inset-72 shadow-lg bg-white p-[20px] rounded-md z-10">
            <p className="text-[30px]">Sorry, {Message}</p>


        </div>
    )
}
export default MessageBox