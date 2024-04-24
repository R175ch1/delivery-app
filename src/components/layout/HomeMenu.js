export default function HomeMenu() {
    return (
        <section>
        <div className="my-10">
            <h3 className="text-center text-3xl font-semibold ">Bestseller</h3>
        </div>
            <div className="grid grid-cols-3 gap-4">

                <div className="bg-stone-300 p-4 rounded-md text-center group hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all">
                    <img src="/pizza1.jpg" alt="Pizza Tomate-Morzarella" className="border-2 "/>
                    <h4 className="font-semibold">Pizza Tomate-Morzarella</h4>
                    <p className="text-stone-600 text-sm my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam. <br/>
                        <span className="font-semibold">10,50€</span>
                    </p>
                    <button className="bg-purple-800 font-semibold text-white rounded-full py-2 px-4">Hinzufügen..</button>
                </div>

                <div className="bg-stone-300 p-4 rounded-md text-center group hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all">
                    <img src="/pizza2.jpg" alt="Pizza Veggi" className="border-2 "/>
                    <h4 className="font-semibold">Pizza Veggi</h4>
                    <p className="text-stone-600 text-sm my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam. <br/>
                        <span className="font-semibold">13,50€</span>
                    </p>
                    <button className="bg-purple-800 font-semibold text-white rounded-full py-2 px-4">Hinzufügen..</button>
                </div>

                <div className="bg-stone-300 p-4 rounded-md text-center group hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all">
                    <img src="/pizza3.jpg" alt="Pizza Scampi" className="border-2 "/>
                    <h4 className="font-semibold">Pizza Scampi</h4>
                    <p className="text-stone-600 text-sm my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam. <br/>
                        <span className="font-semibold">11,00€</span>
                    </p>
                    <button className="bg-purple-800 font-semibold text-white rounded-full py-2 px-4">Hinzufügen..</button>
                </div>
        </div>
            </section>
    );
}

