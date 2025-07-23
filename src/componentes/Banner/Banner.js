import './Banner.css';

export const Banner = () => { //arrow functions: exporta o elemento Banner através de uma constante
    return (
        <header className="banner">
            <img src="/imagens/banner.png"
            alt="Banner da Organização"/>
        </header>
    );
}
