
function Carregar(Caminho, Lingua){
    // Carrega o Menu
    document.querySelector('.Menu').innerHTML = `
        <ul>
            <a class="Logo" href="`+Caminho+`"><img src="`+Caminho+`../style/Icons/Logo-64.png" style="width: 25px;" alt="Inicio"></a>
            <li><a href="`+Caminho+`Suporte">Suporte</a></li>
            <li><a href="`+Caminho+`Salo">Quem somos</a></li>
            <li><a href="`+Caminho+`Servicos">Serviços</a></li>
            <li><a href="`+Caminho+`Planos">Planos</a></li>
            <li><a href="`+Caminho+`Parceiros">Parceiros</a></li>
            <li><a href="`+Caminho+`Colaborar">Colaborar</a></li>
            <li><a href="`+Caminho+`Privacidade">Política de Privacidade</a></li>
        </ul>
    `;

    Menu = document.querySelector('.Menu').innerHTML;

    if (!localStorage.getItem('LGPD')){
        if (Lingua == 'pt-br'){
            htmlLGPD = `
                <div class="LGPD">
                    <p class="">Nós da Salo coletamos dados dos nossos usuarios para possibilitar e aprimorar sua experiência em nosso site. Acessando nossas páginas você concorda com <br> a coleta e uso desses dados. Saiba mais em <a  class="TextoAcentuado cblue Link" href="./Privacidade/">Política de privacidade</a></p>
                    <button onclick="FecharLGPD();" class="Botao black cwhite">Concordar</button>
                </div>
            `;
        }else{
            htmlLGPD = `
                <div class="LGPD">
                    <p class="">Nós da Salo coletamos dados dos nossos usuarios para possibilitar e aprimorar sua experiência em nosso site. Acessando nossas páginas você concorda com <br> a coleta e uso desses dados. Saiba mais em <a  class="TextoAcentuado cblue Link" href="./Privacidade/">Política de privacidade</a></p>
                    <div class="Linha Desocultar"></div>
                    <button onclick="FecharLGPD();" class="Botao black cwhite">Concordar</button>
                </div>
            `;
        }
    
        document.querySelector('.Menu').innerHTML = Menu+htmlLGPD;
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
                        <img src="`+Caminho+`../style/Icons/Logo-64.png" style="width: 40px;">
                    </div>
                    <div class="Linha"></div>
                    <p class="Texto">Salo Soluções Corporativa</p>
                </div>
                <div class="Linha" style="width: 50px;"></div>
                <div class="LinksRodape">
                    <p>SOBRE NÓS</p>
                    <div class="Linha"></div>
                    <a href="" class="Link">Quem somos</a><br>
                    <a href="" class="Link">Nossos parceiros</a><br>
                </div>
                <div class="Linha" style="width: 50px;"></div>
                <div class="LinksRodape">
                    <p>MAPA DO SITE</p>
                    <div class="Linha"></div>
                    <a href="" class="Link">Serviços</a><br>
                    <a href="" class="Link">Planos</a><br>
                    <a href="" class="Link">Colaborar</a><br>
                </div>
                <div class="Linha" style="width: 50px;"></div>
                <div class="LinksRodape">
                    <p>AJUDA E SUPORTE</p>
                    <div class="Linha"></div>
                    <a href="" class="Link">Suporte</a><br>
                    <a href="" class="Link">Contato</a><br>
                    <a href="" class="Link">Política de Privacidade</a><br>
                </div>
                <div class="Linha" style="width: 50px;"></div>
                <div class="LinksRodape">
                    <p>SIGA NOS</p>
                    <div class="Linha"></div>
                    <div class="Conjunto" style="width: min-content;">
                        <a href="https://web.facebook.com/SensaiOficial"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAAB5UlEQVRIid3VO2sVURAH8N8VEbWQ3GjSmHhVgoVVohF8oWnstfM7+MCvophUIiSxSiVa+cDCxlY7TaW5JilERYiKwXAt5iwsJ7vXTTodWJZ5/mfOnDPD/0KtBjajuIJL6KCNr3iPZ3iI7nYTGMYM1tFLgV5gIf0/Jvk6pjG0VYDJFGQDszhRYdPCScwlu27iGwN8xwpON/Q5i1WsNQEaFhWsiPOvo0FMpID7kqyTgLr+cnQzovQzNfo2noheFN+Dkv5c8r9bBzAqmjjbJ4n7GUBPXIQyzac4I1UBbianqiYXtFoK/jYBXM1sJpP+elWAx+I8697O3qyCup61sIxHhWBHSdnBYgpQRbsy/luNXQ/vcKgQ7CwpB8UR5HRRXOU9mfwWfuIVXma6zzhWlcEbMSZyWrC52eXvXoXPc7wumPJxLeG4zT35UZVRiRYzvpXifKgyvpEyG8/ku3E0ycsVjONIlihxO3u4VgUyov87GchABmrs5vALB2v0psWLndomyHn8xu06AGLmdMX8GtsiyFjyW8KBfiDE0FtLDhcagkyJB7im/8TYBNQVpc+LUdHOQNo4JQbkRqpgoilAQUNimhab8VMGUvDruIP9dYGa7PgRXBY7/rCYDF/Ejn8qdvzyViv4N+kP88+QscqNLp0AAAAASUVORK5CYII="/></a>
                        <div class="Linha" style="width: 5px;"></div>
                        <a href="https://www.instagram.com/lojasensai/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAAB20lEQVRIid3VTUtWURAH8F/hUyiSRUFhbaJauah9LYLeTKgIaS+FHyEKEsOFFX0Al64t2hRl2apFtO8DBEIltmihBlFKt8WZB27Xc5+XXNUfLsOZ97lzzgz/C7a1kPXhFA6i0UJvHZ/wFt87DdzAFNZQdPGt4S562lXSwDMMYx6zWOwgscO4jothdwUbdcpTkdXNDhzncDvsJ+sU+qSSX3TpeB+eYDTOr7CK3pzyuchiNCeUfsVMOJyRfimcDrvHcb4W57M5J2MhPF7h78ZCyH5hKWiBlxiIQHtD/0TIxpoOtpecNa9ptWGPcAb3sAeDQe9L1c/hDb6G/nrF3x8YjwyGSrzh4E3nDCJQgfMl3lDwxnOV5HA5DB7WyKfxI/Rq0S7IAXzBSo38W8gHtxJkGful5ubQH/KlrQR5Kk2FWzXyCewMvY6Qazzpmm5ITe4PXj8eBL/6eDc1voy6dzIgzaNCavJi0CIC7Krob3on5Yn5OehRvC/xVzCCC7gkXYZlaZC+ziR7LOjHXCXN2TWfE3aBBS1mF2kfFNI0/RvcCfuJMrO6T3qkmzISGc3iQwfOj+CG9PKf46oW+6QZaFIquZvNuBoVtN2MZfTiJA5hRwu9n1KT3+lix/+b+A3ROYKoWeAs3gAAAABJRU5ErkJggg=="/></a>
                    </div>
                </div>
                <div class="Linha" style="width: 50px;"></div>
            </div>
        </div>
    `;

}