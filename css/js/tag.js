const color={
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header:'#d81b60',
    nav: '#d81b60',
    main: '#00acc1',
    footer:'#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag){
        return this[tag]? this[tag]:this[padrao]
    }
}

document.querySelectorAll('.tag').forEach(box => {
    const tagname=box.tagName.toLowerCase()
    box.style.borderColor= color.get(tagname)

    if(!box.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor= color.get(tagname)
        label.innerHTML= tagname
        box.insertBefore(label,box.childNodes[0])
    }
});