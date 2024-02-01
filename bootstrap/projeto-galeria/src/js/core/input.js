import $ from 'jquery'

setTimeout(()=>{
    document.querySelectorAll('[closeModal]').forEach(tag => { tag.addEventListener('click',cleanUpdate)})
    document.getElementById('upFile').addEventListener('change',toggleForm)
},2000)

function toggleForm(event){
    $('fieldset').removeAttr('disabled')
    $('#sub').removeAttr('disabled')
}

function cleanUpdate(event){
    $('[form-camp]').each((index,tag)=>{
        $(tag).val('')
    })
    $('fieldset').attr('disabled','true')
    $('#sub').attr('disabled','true')
    $('#upFile').val('')
}