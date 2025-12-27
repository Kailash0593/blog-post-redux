import { useNavigate } from 'react-router-dom';

export const Dashbaord = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/users");
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-6">
            <h1>Welcome to this awesome React-Redux app 🚀 Click the <b>Start</b> button below to begin!</h1>
            <button onClick={handleClick} className="border rounded p-2 cursor-pointer ">Start!</button>
        </div>
    )
}
