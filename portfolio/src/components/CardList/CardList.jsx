import CardNFT from "../CardNFT/CardNFT";
import "./CardList.css";

function CardList() {
    return (
        <section className="card-list">

            <CardNFT
                titulo="Equilibrium #3429"
                descricao="Our Equilibrium collection promotes balance and calm."
                preco="0.041"
                tempo="3 days left"
                imagem="/images/nft1.png"
            />

            <CardNFT
                titulo="Astral #1287"
                descricao="A unique NFT inspired by the beauty of the universe."
                preco="0.085"
                tempo="2 days left"
                imagem="/images/nft2.png"
            />

            <CardNFT
                titulo="Cosmic #5632"
                descricao="Discover a digital collection created for NFT lovers."
                preco="0.065"
                tempo="5 days left"
                imagem="/images/nft3.png"
            />

        </section>
    );
}

export default CardList;