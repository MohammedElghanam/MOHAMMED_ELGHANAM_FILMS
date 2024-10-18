import Logout from "../components/UI/logout";
import Success from "../component/success/success";

export default function DashboardAdmin ({ active }) {
    return <>
        <div className=" mt-24">
            { active && (<Success message='Successfully logged in as Admin!' />)}            
            <div className=" flex justify-between items-center mx-20">
                <h1>hello to Dashboard</h1>
                <Logout />
            </div>            
        </div>
    </>
}