// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
document.addEventListener("DOMContentLoaded", function(event) {
  
  var minimumCart = 65;
 
  vtexjs.checkout.getOrderForm()
  .done(function(orderForm) {
    var progBar = document.querySelector('.prog-bar');
    var p = document.querySelector('#bar-prog p');
    var int = orderForm.value;
    var tmp = int+'';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if( tmp.length > 6 )
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    var value = tmp.substring(0, tmp.length - 3).replace('.', '');
    
    $('select option:nth-child(1)').text('Adicionar Assinatura');
	$('select option:nth-child(2)').text('Mensal' );
	$('select option:nth-child(3)').text('Semanal' );
	$('select option:nth-child(4)').text('Quizenal' );
   
    
    
    if (value < minimumCart) {
        var perc = (value * 100 ) / minimumCart;
        progBar.style.width = perc+"%";
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ".$1");
        if( tmp.length > 6 )
            tmp = tmp.replace(/([0-9]{3}).([0-9]{2}$)/g, "$1.$2");
            console.log(tmp);
            console.log(perc);
        var newValue = minimumCart - parseFloat(tmp);
        newValue = newValue.toFixed(2).replace('.',',');
        p.innerHTML = "FALTAM R$ "+newValue+"  PARA PEDIDO MÍNIMO";
    } else if(perc > 100){
        progBar.style.width = "100%";
        p.innerHTML = "PARABÉNS! VOCÊ ATINGIU O MÍNIMO PARA O PEDIDO";
    } else {
        progBar.style.width = "100%";
        p.innerHTML = "PARABÉNS! VOCÊ ATINGIU O MÍNIMO PARA O PEDIDO";
    }
  });
  $(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
    
    $('select option:nth-child(1)').text('Adicionar Assinatura');
	$('select option:nth-child(2)').text('Mensal' );
	$('select option:nth-child(3)').text('Semanal' );
	$('select option:nth-child(4)').text('Quizenal' );
    
    var progBar = document.querySelector('.prog-bar');
      var p = document.querySelector('#bar-prog p');
      var int = orderForm.value;
      var tmp = int+'';
      tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
      if( tmp.length > 6 )
          tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

      var value = tmp.substring(0, tmp.length - 3).replace('.', '');
      if (value < minimumCart) {
          var perc = (value * 100 ) / minimumCart;
          progBar.style.width = perc+"%";
          var tmp = int+'';
          tmp = tmp.replace(/([0-9]{2})$/g, ".$1");
          if( tmp.length > 6 )
              tmp = tmp.replace(/([0-9]{3}).([0-9]{2}$)/g, "$1.$2");
              console.log(tmp);
              console.log(perc);
          var newValue = minimumCart - parseFloat(tmp);
          newValue = newValue.toFixed(2).replace('.',',');
          p.innerHTML = "FALTAM R$ "+newValue+"  PARA PEDIDO MÍNIMO";
        	var btnFiz = document.getElementById('cart-to-orderform');
          if (btnFiz) {
              btnFiz.style.display = "none";
          }
      } 
    else if (perc > 100){
          progBar.style.width = "100%";
          p.innerHTML = "PARABÉNS! VOCÊ ATINGIU O MÍNIMO PARA O PEDIDO";
              var btnFiz = document.getElementById('cart-to-orderform');
          if (btnFiz) {
              btnFiz.style.display = "block";
          }
    } else {
          progBar.style.width = "100%";
          p.innerHTML = "PARABÉNS! VOCÊ ATINGIU O MÍNIMO PARA O PEDIDO";
        var btnFiz = document.getElementById('cart-to-orderform');
          if (btnFiz) {
              btnFiz.style.display = "block"; 
          }
      }
  });

  });

