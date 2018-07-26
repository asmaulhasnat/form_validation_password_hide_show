      $(document).ready(function(){
        $('.pass_show').append('<i class="fa fa-eye ptxt" aria-hidden="true"></i>');  
        });
        $(document).on('click','.pass_show .ptxt', function(){ 
        $(this).prop('class',$(this).attr('class') == "fa fa-eye ptxt" ? "fa fa-eye-slash ptxt" : "fa fa-eye ptxt"); 

        $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 

        }); 