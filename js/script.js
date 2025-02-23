$(document).ready(function(event){

    $( "#accordion" ).accordion({
      icons: { "header": " ui-icon-caret-1-s", "activeHeader": "ui-icon-carat-1-n" },
      heightStyle: "content"
    })

    $('#order-form').on('submit',  e => {
        e.preventDefault();

        let name = $('#name').val();
        let surname = $('#surname').val();
        let phone = $('#phone').val();
        let country = $('#country').val();
        let postCode = $('#post-code').val();
        let address = $('#address').val();

        if(name === '' || surname === '' || postCode === '' || phone === '' || country === '' || address === '') {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        if(!/^\d{6}$/.test(postCode)){
            alert('Пожалуйста, введите корректный индекс (число из 6 цифр)');
            return;
        }

        $('#order-form').hide();
        $('#text-submit-success').show();
    });
});
