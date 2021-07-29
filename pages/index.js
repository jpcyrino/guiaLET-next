import React from 'react';

function Home() {
    return (
        <article>
            {texto.titulo}
            {texto.paragrafos.map((e) => e)}
        </article>
    )
}

/* Vale a pena deixar o texto como objeto ? */
const texto = {
    titulo: <h1>GuiaLET</h1>,
    paragrafos: [
        <p>O GuiaLET é um projeto de extensão cujo objetivo é oferecer aos estudantes uma orientação quanto a leituras fundamentais para sua formação, disponível online e com acesso aberto. O projeto está sendo desenvolvido em parceria com a <a href="http://www.edufba.ufba.br" target="_blank">Editora da Universidade Federal da Bahia – EDUFBA</a>.</p>,
        <p>O GuiaLET conta com textos apresentando os diferentes campos de estudo/pesquisa/especialidade em Letras, indicando 10 (dez) leituras essenciais para introdução em cada uma dessas áreas do conhecimento. O material serve como guia tanto para a formação do estudante de graduação, seja o licenciado, seja o bacharel, como para o desenvolvimento de pesquisa, já que ele tem ao seu alcance uma relação de obras basilares para o entendimento de determinada área.</p>,
        <p>O projeto é inspirado no <em>Guia Bibliográfico da Faculdade de Filosofia, Letras e Ciências Humanas – FFLCH – da Universidade de São Paulo – USP</em>, coordenado pelo Prof. Dr. João Roberto Faria que, por sua vez, inspirou-se no texto <a href="https://teoriaedebate.org.br/2000/07/01/10-livros-para-conhecer-o-brasil/" target="_blank"> DEZ LIVROS PARA CONHECER O BRASIL, de Antonio Candido</a>. O GuiaLET, entretanto, possui o diferencial de atender tanto áreas mais gerais do curso de Letras, como as componentes curriculares, quanto mais específicas, como áreas de pesquisa e de especialidade, servindo como guia de leitura para nossos alunos, contribuindo, assim, para uma autonomia em sua formação.</p>,
        <p>GuiaLET pode (e deve) estabelecer um diálogo também interdisciplinar, uma vez que nosso currículo, projetos de pesquisa e a própria área assim o são. Dessa forma, o GuiaLET poderá contar com textos das áreas da Educação, Antropologia, Filosofia, Teatro, Artes, Estudos de Gênero, História, Ciências da Computação, Ciências Biológicas, entre outras.</p>,
        <p>Por fim, o GuiaLET pretende estabelecer um diálogo entre o corpo docente, no que diz respeito a sua formação e pesquisa, e o corpo discente, que, como é sabido, não tem dimensão das possibilidades que o curso de Letras proporciona.</p>
    ]
}

export default Home;