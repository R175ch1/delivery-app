export default function Hero() {
    return (
        <section className="grid grid-cols-2 gap-6 mt-10">
            <div>
            <h1 className="text-4xl font-semibold">
                Die beste Pizza in der ganzen Stadt!
                </h1>
                <p className="mt-4">Bestellt euch noch jetzt eine Pizza..</p>
                <div className="flex gap-6 mt-6">
                    <button className="bg-purple-800 text-white px-4 py-2 rounded-full font-semibold">Bestellen</button>
                    <button className="font-semibold text-purple-900 px-4 py-2 rounded-full">mehr Informationen..</button>
                    </div>
                </div>
            <div className="relative">
                <img src={'/pizza.jpg'} layout={'fill'} objectFit={'contain'} alt={'Pizza'} />
            </div>
            
        </section>
    );
}