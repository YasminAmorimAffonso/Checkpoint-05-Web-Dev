
import { useState, useEffect } from "react";
import "./Header.css";


function Header({acao}) {




    return (
        <>

            <div id={ acao ? "bgCor-header" : "bg-header" } className="fixed ml-[25px] flex justify-center items-center w-screen md:h-35 ml-[20px]">

                <div className="m-[10px] h-[125px] w-[250px] bg-[#CE6826] rounded-full flex justify-center items-center md:m-4 w-65 h-25 lg:w-95 h-30">

                    <img src="/assets/imgs/Logo.svg" alt="" className="w-[150px] h-[150px] md:w-40 h-40 lg:w-[150px] h-[150px]" />

                </div>

            </div>

        </>
    )
}

export default Header
