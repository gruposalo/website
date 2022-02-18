function Carregar(Caminho, Lingua){
    // Carrega o Menu
    document.querySelector('.Menu').innerHTML = `
        <div class="Cabecalho">
            <ul>
                <li><a class="Link" href="#">Grupo Salo</a></li>
                <li><a class="Link" href="https://www.sensai.com.br">Sensai</a></li>
                <li><a class="Link" href="#"></a></li>
            </ul>
        </div>
        <ul name="ulLinks">
            <div class="controles">
                <a class="Logo" href="`+Caminho+`">
                    <img src="`+Caminho+`../Estilo/Icones/Salo/Logo.png" style="width: 40px;" alt="Inicio">
                </a>
                <li><a><img name="controle" class="Desocultar" onclick="menu()" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAAAMElEQVRIie3UQQ0AMAzDQHfIx7zlMCnqHj4Cziug3xRw05GTDkhZBfT2COmdV6+cAZVYAgcpIVnHAAAAAElFTkSuQmCC"/></a></li>
            </div>
            <div class="Links">
                <li><a href="`+Caminho+`Empresa">Quem somos</a></li>
                <li><a href="`+Caminho+`Fundos">Fundos</a></li>
                <li><a href="`+Caminho+`Contato">Contato</a></li>
                <li><a href="`+Caminho+`Governaça">Governaça</a></li>
                <li><a href="`+Caminho+`Blog">Blog</a></li>
            </div>
            
        </ul>
        <div class="Anuncio">
            <p class="cwhite">Confira o lançamento do fundo <a class="Link" href="`+Caminho+`Fundos/Octa">OCTA FI RF</a></p>
            <p class="cwhite FecharAnuncio" onclick="FecharAnuncio()">x</p>
        </div>
    `;

    Menu = document.querySelector('.Menu').innerHTML;

    if (!localStorage.getItem('LGPD')){
        if (Lingua == 'pt-br'){
            htmlLGPD = `
                <div class="LGPD">
                    <p class="">Nós da Salo coletamos dados dos nossos usuarios para possibilitar e aprimorar sua experiência em nosso site. Acessando nossas páginas você concorda com <br> a coleta e uso desses dados. Saiba mais em <a  class="Texto cblue Link" href="./Privacidade/">Política de privacidade</a></p>
                    <button onclick="FecharLGPD();" class="Botao black cwhite">Concordar</button>
                </div>
            `;
        }else{
            htmlLGPD = `
                <div class="LGPD">
                    <p class="">Nós da Salo coletamos dados dos nossos usuarios para possibilitar e aprimorar sua experiência em nosso site. Acessando nossas páginas você concorda com <br> a coleta e uso desses dados. Saiba mais em <a  class="Texto cblue Link" href="./Privacidade/">Política de privacidade</a></p>
                    <div class="Linha Desocultar"></div>
                    <button onclick="FecharLGPD();" class="Botao black cwhite">Concordar</button>
                </div>
            `;
        }
    
        document.querySelector('.Menu').innerHTML = htmlLGPD+Menu;
    }

    // Carrega o rodape
    document.querySelector('.Rodape').innerHTML = `
        <div>
            <div class="Linha"></div>
            <div class="Linha"></div>
            <div class="ConjuntoTemporario" style="margin-left: 20px;">
                <div class="Linha" style="width: 50px;"></div>
                <div>
                    <div class="Conjunto">
                        <img src="`+Caminho+`../Estilo/Icones/Salo/Logo azul.png" style="width: 60px;">
                    </div>
                </div>
                <div class="Linha" style="width: 50px;"></div>
                <div class="LinksRodape">
                    <p>SOBRE NÓS</p>
                    <div class="Linha"></div>
                    <a href="`+Caminho+`Salo" class="Link">Quem somos</a><br>
                    <a href="`+Caminho+`Parceiros" class="Link">Nossos parceiros</a><br>
                </div>
                <div class="Linha" style="width: 50px;"></div>
                <div class="LinksRodape">
                    <p>SEGURANÇA</p>
                    <div class="Linha"></div>
                    <a href="https://transparencyreport.google.com/safe-browsing/search?url=www.salosolucoes.com.br"><img title="Site seguro" src="../`+Caminho+`Estilo/Icones/Layout/selo-google.png"></a>
                </div>
                
            </div>
        </div>
    `;

}