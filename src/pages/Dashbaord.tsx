import { useNavigate } from 'react-router-dom';

export const Dashbaord = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/users");
    }

    return (
        <div className="absolute top-1/2 left-1/2 text-2xl -translate-x-1/2 -translate-y-1/2  flex flex-col justify-center items-center gap-6 max-sm:text-lg w-full px-2 text-center">
            <h1>Welcome to this awesome React-Redux app 🚀 Click the <b>Start</b> button below to begin!</h1>
            <button onClick={handleClick} className="border rounded p-2 cursor-pointer ">Start!</button>
        </div>
    )
}
