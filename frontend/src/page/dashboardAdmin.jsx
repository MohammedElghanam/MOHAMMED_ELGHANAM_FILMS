import { useState } from 'react';
import Categorys from "../component/dashboardAdmin/categorys";
import Films from "../component/dashboardAdmin/films";
import Navbar from "../component/dashboardAdmin/navBar";
import SideBar from "../component/dashboardAdmin/sideBar";
import Statistique from "../component/dashboardAdmin/statistique";
import Users from "../component/dashboardAdmin/users";
import CreateFilm from "../component/forms/createFilm";
import CreateCategory from '../component/forms/createCategory';
import Createuser from '../component/forms/createUser';

export default function DashboardAdmin () {

    const [filmPopup, setfilmPopup] = useState(false);
    const [userPopup, setuserPopup] = useState(false);
    const [categoryPopup, setcategoryPopup] = useState(false);
    const [active, setactive] = useState(false);

    const mountUserPopup = () => {
        setuserPopup(true);
    }

    const umountUserPopup = () => {
        setuserPopup(false);
    }

    const mountFilmPopup = () => {
        setfilmPopup(true);
    }

    const umountFilmPopup = () => {
        setfilmPopup(false);
    }

    const mountCategoryPopup = () => {
        setcategoryPopup(true);
    }

    const umountCategoryPopup = () => {
        setcategoryPopup(false);
    }

    const didMount = () => {
        setactive(false);
    }

    const didUmount = () => {
        setactive(true);
    }
    return <>
        <section className=" grid grid-cols-12 grid-rows-12 h-screen ">
            <div className=" flex flex-col justify-between items-center col-span-2 row-span-12 bg-purple-600 px-3 py-4">
                <SideBar didUmount={ didUmount } didMount={ didMount }  />
            </div>
            <div className=" grid grid-cols-12 grid-rows-12 col-span-10 row-span-12 overflow-scroll ">
                
                <div className=" flex justify-between items-center col-span-12 h-14 px-5 border-b">    
                    <Navbar />
                </div>

                {/* statistique  */}
                <div className=" grid grid-cols-12 justify-center items-center col-span-12 row-span-3 gap-4 px-5 mt-4">
                    <Statistique />
                </div>

                {/* tabels  */}
                <div className=" grid grid-cols-12 h-fit col-span-12 gap-3 p-4 mt-5">
                    {active ? <Users mountUserPopup={ mountUserPopup } /> : <Films mountFilmPopup={ mountFilmPopup } />}
                    <Categorys mountCategoryPopup={ mountCategoryPopup } />
                </div>
            
            </div>

        </section>

        { filmPopup ? <CreateFilm umountFilmPopup={ umountFilmPopup } /> : ''}
        { categoryPopup ? <CreateCategory umountCategoryPopup={ umountCategoryPopup } /> : ''}
        { userPopup ? <Createuser umountUserPopup={ umountUserPopup } /> : ''}
    </>
}