//inicializa los popover que tengan el atributo  data-toggle="popover"
$(function() {
    $('[data-toggle="popover"]').popover();

    $('.btn-success').popover({ title: "Encabezado", content: "Animación en true", animation: true });
    $('.btn-warning').popover({ title: "Encabezado", content: "Animación en false", animation: false });


});


//inicializa los popover que se encuentren el header
/*$(function () {
    $('.example-popover').popover({
        container: 'header'
    })
})*/


//codigo para cambiar el foco
$('.popover-dismiss').popover({
    trigger: 'focus'
})