function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-teal-500 font-bold text-white'>
            
                <div className="container flex justify-between text-lg">
                    Farmacia

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        Nova categoria
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar