import $ from 'jquery'
let uploadbutton = document.getElementById('sub');
    uploadbutton.addEventListener('click',e=>{
        let uploadInput = document.getElementById('upFile')
        uploadFile(uploadInput)
    });


function uploadFile(target){
    let inputName=target.name
    let file = target.files[0];
    let formData=new FormData()
    formData.append('upFile',file)
    const nome=file.name.split('.')
    console.log(nome)
    $.ajax({
        url:'/upload',
        method:'post',
        data:formData,
        processData:false,
        contentType:false,
        success(resp){
            $.ajax({
                url:'/docs/post/imagens.json',
                method:'post',
                data:{game:`${nome[0]}`,path:`./imgs/${file.name}`,format:`${file.type.replace('image/','')}`},
                success(data){
                    console.log(data)
                }
            })
        },
        error(err){
            console.log(err.message)
        }

    })
    
}
