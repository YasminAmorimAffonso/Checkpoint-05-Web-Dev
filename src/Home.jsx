import { useState, useEffect } from 'react'
import './Home.css'

import Header from './components/Header'
import Footer from './components/Footer'

function Home() {


  const [items, setItems] = useState([]);


  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=8431168ba5f5434e9de85013427ab8f7&query=burger`);


        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }

        const data = await response.json();

        console.log('API Data:', data);
        setItems(data.menuItems);


      } catch (error) {

        console.error('Erro ao buscar dados:', error);
      }

    };

    fetchData();

  }, []);


  const [cor, setCor] = useState(false)

  useEffect(function () {

    function posScroll() {

      if (window.scrollY > 3) {

        setCor(true);

      }

      else {

        setCor(false);

      }

    }

    window.addEventListener("scroll", posScroll);

  }, []);


  return (
    <>


      <body id='body-home' className=' m-[0px] bg-[#F8EBD1] flex flex-col justify-between items-center'>

        <header>

          <Header acao={cor} />

        </header>

        <div className='pt-[175px]'>

          <div id='sec1-home' className='flex flex-row justify-around items-center h-[550px]'>

            <img src="/public/assets/imgs/vetorCelular.svg" alt="" className='w-[150px]' />

            <div className='w-1/2 flex flex-col justify-right items-center mr-[15px] mt-[10px]'>

              <img src="/assets/imgs/Logo.svg" alt="" className='w-[150px] ml-[50px]' />

              <h1 className='text-[14px] text-end font-[poppins]'>GourmetOn – O sabor da alta gastronomia em sua casa</h1>

              <p className='text-[12px] text-end font-[inter]'>Transforme suas refeições em experiências únicas. Com o GourmetOn, você recebe pratos selecionados de chefs renomados diretamente na sua casa, com praticidade e sofisticação. Descubra, peça e saboreie o melhor da gastronomia sem sair do lugar.</p>

              <button className='ml-[90px] mt-[25px] w-[125px] h-[50px] rounded-[10px] border-none bg-[#522258] font-[poppins] hover:cursor-pointer'>Baixe já</button>

            </div>

          </div>

          <div id='exp-home' className='w-screen flex flex-col justify-around h-[750px]'>

            <div className='w-screen flex justify-left m-[15px]'>

              <img src="/assets/imgs/pattern1.png" alt="" className='self-start w-[150px]' />

            </div>

            <div className='w-4/5 ml-[75px] text-center'>

              <h3 className='mb-[50px]'>Valorizando sua experiência</h3>

              <p className=''>No GourmetOn, cada pedido é pensado para transformar sua refeição em um momento único. Com entrega rápida e eficiente, você recebe seus pratos favoritos no conforto da sua casa, sem perder a qualidade. Nossa plataforma oferece uma ampla variedade de restaurantes selecionados, de menus clássicos a opções exclusivas, garantindo que sempre haja algo especial para você. E com um sistema de pagamento simples e seguro, pedir nunca foi tão fácil — tudo para que você aproveite cada sabor sem preocupações.</p>

            </div>

            <div className='w-screen flex justify-end m-[15px]'>

              <img src="/assets/imgs/pattern2.png" alt="" className='self-end w-[150px]' />

            </div>

          </div>


          <div id='saborIdeal-home'>

            <div className='w-screen flex justify-left m-[15px]'>

              <img src="/assets/imgs/pattern1.png" alt="" className='self-start w-[150px]' />

            </div>

            <div className='w-4/5 ml-[60px] text-center'>

              <h3 className='mb-[50px] text-center'>Encontre seu sabor ideal</h3>

              <p className='mb-[50px]'>Descobrir sua próxima refeição é simples e prazeroso. Explore o catálogo usando filtros inteligentes por tipo de cozinha, pratos, restaurantes ou preferências alimentares. Busque rapidamente pelo que deseja e receba sugestões personalizadas que combinam com seu paladar — tudo para que você aproveite o melhor da gastronomia sem perder tempo.</p>

            </div>

            <div className='flex flex-col justify-center items-center'>

              <h4 className='font-[poppins]'>Conheça alguns de nossos produtos</h4>

              <div id='products-home' className='flex flex-col'>

                <div>

                  <div className="flex flex-wrap justify-center gap-6">

                    <div className="flex flex-wrap justify-center gap-6">

                      {items.length > 0 ? (

                        items.map((item, index) =>

                          index < 4 ? (

                            <div key={item.id} className="bg-[#CE6826] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-[25px] flex flex-col items-center p-4 text-center">

                              <img src={item.image} alt={item.title} className="w-[100px] h-[100px] object-contain mb-4" />

                              <h4 className="font-[poppins] text-lg text-[#F8EBD1]">{item.title}</h4>

                            </div>

                          ) : null

                        )

                      ) : (

                        <p className="font-[poppins] text-[20px] -ml-[175px]">Carregando produtos...</p>

                      )}

                    </div>


                  </div>



                </div>

              </div>

            </div>


            <div className='w-screen flex justify-end m-[15px]'>

              <img src="/assets/imgs/pattern2.png" alt="" className='self-end w-[150px]' />

            </div>

          </div>



          <div className='flex flex-col' id='aVoz-home'>

            <div className='w-screen flex justify-left m-[15px]'>

              <img src="/assets/imgs/pattern1.png" alt="" className='self-start w-[150px]' />

            </div>

            <div className='flex flex-col justify-around items-center'>

              <h3 className='mb-[50px]'>A voz de quem saboreia</h3>

              <div id='cardsVoz-home' className='flex flex-col justify-around items-center h-[1500px] w-1/1'>

                <div className='bg-[#CE6826] w-1/3 rounded-[25px] flex flex-col justify-around items-center p-[15px] text-center'>

                  <img src="/assets/imgs/vetorSelf.svg" alt="" />

                  <h5 className=''>Mariana Castro</h5>

                  <p>“Entrega rápida e pratos impecáveis! É como ter um restaurante cinco estrelas na minha mesa. Recomendo muito!”</p>

                </div>

                <div className='bg-[#CE6826] w-1/3 rounded-[25px] flex flex-col justify-around items-center p-[15px] text-center'>

                  <img src="/assets/imgs/vetorSelf.svg" alt="" />

                  <h5>Ricardo Siqueira</h5>

                  <p>“O GourmetOn transformou meus jantares de fim de semana. Variedade incrível e qualidade excepcional.”</p>

                </div>

                <div className='bg-[#CE6826] w-1/3 rounded-[25px] flex flex-col justify-around items-center p-[15px] text-center'>

                  <img src="/assets/imgs/vetorSelf.svg" alt="" />

                  <h5>Juliana Torres</h5>

                  <p>“Adorei a seleção de restaurantes e a facilidade para fazer o pedido. Só poderia ter mais opções vegetarianas.”</p>

                </div>

                <div className='bg-[#CE6826] w-1/3 rounded-[25px] flex flex-col justify-around items-center p-[15px] text-center'>

                  <img src="/assets/imgs/vetorSelf.svg" alt="" />

                  <h5>Felipe Andrade</h5>

                  <p>“Simples, rápido e sofisticado. O pagamento é super prático e os pratos chegam sempre quentinhos.”</p>

                </div>

              </div>

            </div>

            <div className='w-screen flex justify-end m-[15px]'>

              <img src="/assets/imgs/pattern2.png" alt="" className='self-end w-[150px]' />

            </div>

          </div>


          <div id='ultSec-home' className='flex flex-col justify-center items-center w-4/5'>

            <div className='w-screen flex justify-left m-[15px]'>

              <img src="/assets/imgs/pattern1.png" alt="" className='self-start w-[150px]' />

            </div>

            <div className='ml-[75px] text-center flex flex-col justify-center items-center'>

              <h3>Fique por dentro das novidades</h3>

              <p>Cadastre seu e-mail e seja o primeiro a saber sobre nossos lançamentos e promoções exclusivas.</p>



              <div id='forms' className=' h-[400px] w-[325px] flex flex-col items-center rounded-[20px]'>

                <div id='linha1' className='h-1/1 flex flex-col justify-around items-center'>

                  <div className='flex flex-col justify-evenly h-1/1'>

                    <label>Nome</label>

                    <input type="text" name="" id="" placeholder='Nome Sobrenome' className='border-none rounded-full bg-[#F8EBD1] p-[10px] w-[200px]' />

                  </div>

                  <div className='flex flex-col justify-evenly h-1/1'>

                    <label>Email</label>

                    <input type="text" name="" id="" placeholder='email@gmail.com' className='border-none rounded-full bg-[#F8EBD1] p-[10px] w-[200px]' />

                  </div>


                </div>


                <div id='linha2' className='h-1/1 flex flex-col justify-around'>

                  <div className='flex flex-col justify-evenly h-1/1'>

                    <label>Cidade</label>

                    <input type="text" name="" id="" placeholder='Ex.: Espírito Santo' className='border-none rounded-full bg-[#F8EBD1] p-[10px] w-[200px]' />

                  </div>

                  <div className='flex flex-col justify-evenly h-1/1'>

                    <label>Preferência Gastronômica</label>

                    <input type="text" name="" id="" placeholder='Ex.: Japonesa' className='border-none rounded-full bg-[#F8EBD1] p-[10px] w-[200px]' />

                  </div>


                </div>


                <button className='m-[10px] p-[10px] w-[150px] text-center border-none bg-[#F8EBD1] rounded-full hover:cursor-pointer'>Enviar</button>


              </div>




            </div>

            <div className='w-screen flex justify-end m-[15px]'>

              <img src="/assets/imgs/pattern2.png" alt="" className='self-end w-[150px]' />

            </div>

          </div>


        </div>

        <footer>

          <Footer />

        </footer>

      </body>


    </>
  )
}

export default Home
