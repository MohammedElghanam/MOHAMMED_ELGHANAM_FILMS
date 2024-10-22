import Logout from "../component/UI/logout";

export default function DashboardAdmin () {
    return <>
        <div className=" mt-24">          
            <div className=" flex justify-between items-center mx-20">
                <h1>hello to Dashboard</h1>
                <Logout />
            </div>            
        </div>
    </>
}