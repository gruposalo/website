function FecharLGPD(){
    localStorage.setItem('LGPD', 'Aceito');
    document.querySelector('.LGPD').remove();
}

function menu(){
    document.querySelector('.Links').classList = []
    document.querySelector('[name=controle]').classList = ['Ocultar']
}

function FecharAnuncio(){
    document.querySelector('.Anuncio').remove();
}