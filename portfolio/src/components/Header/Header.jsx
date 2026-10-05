import "./Header.css";

function Header() {
    return (
        <header className="header">

            <img
                src="/images/logo.png"
                alt="Portfólio NFT"
                className="logo"
            />

            <nav>
                <a href="#home">Home</a>
                <a href="#nfts">NFTs</a>
                <a href="#sobre">Sobre</a>
            </nav>

        </header>
    );
}

export default Header;