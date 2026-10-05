import "./CardNFT.css";


function CardNFT({ titulo, descricao, preco, tempo, imagem }) {
    return (
        <div className="card-nft">


            <div className="nft-image-container">
                <img
                    src={imagem}
                    alt={titulo}
                    className="nft-image"
                />

                <div className="image-overlay">
                    <span>👁</span>
                </div>
            </div>

            <h2>{titulo}</h2>

            <p className="description">
                {descricao}
            </p>

            <div className="nft-info">
                <span className="price">
                    ♦ {preco} ETH
                </span>

                <span className="time">
                    ◷ {tempo}
                </span>
            </div>

            <div className="divider"></div>

            <div className="creator">
                <p>
                    Creation of <span>Jules Wyvern</span>
                </p>
            </div>

        </div>
    );
}

export default CardNFT;