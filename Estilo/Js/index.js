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
    document.querySelector('.Menu').style.borderBottom = '2px solid #f5f5f5';
}