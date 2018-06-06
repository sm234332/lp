  $(document).ready(function() {
    $("#btn-callback-carousel").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-phone-icon").on("click", function(){
      $("#callback-modal").modal('show');
      $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-callback-carousel-ok").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#callBackMain").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#success-modal-ok").on("click", function(){
      $("#success-modal").modal('hide');
    });

    $("#instagram-icon").on("click", function(){
      window.open('https://www.instagram.com/watchkaty/', '_blank');
    });
    

    $('#section0-1').on("click", function () {
        if($('#section0').hasClass('fa-angle-down')) {
          $('#section0').removeClass('fa-angle-down');
          $('#section0').addClass('fa-angle-up');

          $('#section1').removeClass('fa-angle-up');
          $('#section1').addClass('fa-angle-down');
          $('#section2').removeClass('fa-angle-up');
          $('#section2').addClass('fa-angle-down');
          $('#section3').removeClass('fa-angle-up');
          $('#section3').addClass('fa-angle-down');
        } else {
          $('#section0').removeClass('fa-angle-up');
          $('#section0').addClass('fa-angle-down');
        }
    });
  
    $('#section1-1').on("click", function () {
      if($('#section1').hasClass('fa-angle-down')) {
        $('#section1').removeClass('fa-angle-down');
        $('#section1').addClass('fa-angle-up');

        $('#section0').removeClass('fa-angle-up');
          $('#section0').addClass('fa-angle-down');
          $('#section2').removeClass('fa-angle-up');
          $('#section2').addClass('fa-angle-down');
          $('#section3').removeClass('fa-angle-up');
          $('#section3').addClass('fa-angle-down');
      } else {
        $('#section1').removeClass('fa-angle-up');
        $('#section1').addClass('fa-angle-down');
      }
    });

    $('#section2-1').on("click", function () {
        if($('#section2').hasClass('fa-angle-down')) {
          $('#section2').removeClass('fa-angle-down');
          $('#section2').addClass('fa-angle-up');

          $('#section1').removeClass('fa-angle-up');
          $('#section1').addClass('fa-angle-down');
          $('#section0').removeClass('fa-angle-up');
          $('#section0').addClass('fa-angle-down');
          $('#section3').removeClass('fa-angle-up');
          $('#section3').addClass('fa-angle-down');
        } else {
          $('#section2').removeClass('fa-angle-up');
          $('#section2').addClass('fa-angle-down');
        }
    });

    $('#section3-1').on("click", function () {
        if($('#section3').hasClass('fa-angle-down')) {
          $('#section3').removeClass('fa-angle-down');
          $('#section3').addClass('fa-angle-up');

          $('#section1').removeClass('fa-angle-up');
          $('#section1').addClass('fa-angle-down');
          $('#section2').removeClass('fa-angle-up');
          $('#section2').addClass('fa-angle-down');
          $('#section0').removeClass('fa-angle-up');
          $('#section0').addClass('fa-angle-down');
        } else {
          $('#section3').removeClass('fa-angle-up');
          $('#section3').addClass('fa-angle-down');
        }
    });

    window.setInterval(function() {
      function getDateNow() {
        var n =  new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        m = m.toString().length < 2 ? '0'+m : m;
        var d = n.getDate();
        d = d.toString().length < 2 ? '0'+d : d;
        var h = n.getHours();
        h = h.toString().length < 2 ? '0'+h : h;
        var min = n.getMinutes();
        min = min.toString().length < 2 ? '0'+min : min;
        $('#inputTime').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime2').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime3').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
      };
      getDateNow();
    }, 5000);
  });

  $(document.body).on('hide.bs.modal,hidden.bs.modal', function () {
    $('body').css('padding-right','0');
  });