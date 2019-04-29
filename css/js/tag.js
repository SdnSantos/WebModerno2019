const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    // pega o nome do elemento(tag, p, span, div)
    const tagName = elemento.tagName.toLowerCase()

    //aplica uma cor na borda do elemento
    elemento.style.borderColor = colors.get(tagName)

    //verifica as tags que não estão como nolabel
    if (!elemento.classList.contains('nolabel')) {
        //cria uma label
        const label = document.createElement('label')

        //coloca uma cor de fundo no label
        label.style.backgroundColor = colors.get(tagName)

        //insere o nome da tag na label
        label.innerHTML = tagName

        //adiciona a label como primeiro item na tag
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})