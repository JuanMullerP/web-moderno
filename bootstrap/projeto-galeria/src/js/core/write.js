import $ from 'jquery'

setTimeout(()=>{

    let uploadbutton = document.getElementById('sub');
    uploadbutton.addEventListener('click',e=>{
        let uploadInput = document.getElementById('upFile')
        uploadFile(uploadInput)
    });
},2000)
    

function uploadFile(target){
    let file = target.files[0];
    let formData=new FormData()
    formData.append('upFile',file)
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
                data:{game:`${$('#gameName').val().replaceAll(' ','-')}`,path:`./imgs/${file.name}`,genre:`${$('#gameGenre').val()}`,description:`${$('#description').val()}`},
                success(data){
                }
            })
        },
        error(err){
            console.log(err.message)
        }

    })
    
}
