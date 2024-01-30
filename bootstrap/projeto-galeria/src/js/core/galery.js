import $ from 'jquery'

function includeImg(){
    $.ajax({
        url:'./docs/imagens.json',
        method:'get',
        success(data){
            // const lista= JSON.parse(data)
            data.forEach(element => {
                console.log(element.game)
                $('[wm-galery]').append(`<div class="col-12 col-md-6 col-lg-3 " id="${element.game}"></div>`)
                $(`#${element.game}`).append(`<img src="${element.path}" style="width:100%; height:auto;"></img>`)
            });
        }
    })
}
includeImg()