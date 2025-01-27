
function Home() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            Cuidando de você, sua saúde em boas mãos!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded bg-teal-500 text-white border-black border-solid border-2 font-bold py-2 px-4'>
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/DLWUxkx.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home