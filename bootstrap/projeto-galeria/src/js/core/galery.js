import $ from 'jquery'

function includeDivImage(){
    $.ajax({
        url:'./docs/imagens.json',
        method:'get',
        success(data){
            // const lista= JSON.parse(data)
            $('[wm-galery]').empty()
            data.forEach(element => {
                $('[wm-galery]').append(`<div class=" col-12 col-md-6 col-lg-4 " id="${element.game}"></div>`)
            })
        },
        error(err){
            console.log(err.message)
        }
    })

}


function includeImg(){
    $.ajax({
        url:'./docs/imagens.json',
        method:'get',
        success(data){
            // const lista= JSON.parse(data)
            data.forEach(element => {
                $(`#${element.game}`)
                .append(`<div class="card show-sm mb-5" >
                <img src="${element.path}" width="100%" height="225" class="card-img-top mb-4"></img>
                <div class="card-body "><strong>${element.game.replaceAll('-',' ')}</strong><p class="card-text">${element.description}</p></div>
                </div>`)
            })
        },
        error(err){
            console.log(err.message)
        }
    })
}

setTimeout(()=>{
    includeDivImage()
    includeImg()
},200)

setTimeout(()=>{

    let uploadbutton = document.getElementById('sub');
    uploadbutton.addEventListener('click',e=>{
        $('#formModal').removeClass('show')
        $('#formModal').removeAttr('style')
        $('body').removeAttr('class')
        $('body').removeAttr('style')
        $('.modal-backdrop').remove()
        setTimeout(() => {
            includeDivImage()
            includeImg()
            
        }, 1000);
        
    });
},2000)