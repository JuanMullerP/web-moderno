import $ from 'jquery'

function loadIncludes(parent){
    if(!parent) parent='body'
    $(parent).find('[wm-include]').each((index,element) =>{
        const url=$(element).attr('wm-include')
        $.ajax({
            url,
            method:'get',
            success(data){
                $(element).html(data)
                $(element).removeAttr('wm-include')

                loadIncludes(element)
            }
        })
    })
}

loadIncludes()