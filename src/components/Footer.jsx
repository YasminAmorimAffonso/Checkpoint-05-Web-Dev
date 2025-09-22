

import "./Footer.css";


function Footer() {


    return (
        <>

            {/* VERFICAR PROBLEMA DE TAMANHO DE TEXTO TAG <a> */}

            <div id="bg-footer" className="flex flex-col justify-around items-center h-50 bg-[#CE6826] p-[35px] md:flex flex-row">

                <img src="/assets/imgs/Logo.svg" alt="" className="w-[150px] h-[150px] -mt-[25px]"/>

                <a href="#forms" id="button-footer" className="font-[poppins] decoration-0 text-[15px]">Fique por dentro das novidades</a>

            </div>

        </>
    )
}

export default Footer
