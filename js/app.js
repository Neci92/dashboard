$(document).ready(function () {
  //Init
  $('.button-collapse').sideNav();
  $('.modal').modal();
  $('select').material_select();
  // Counter
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });

  // Comments - Approve & Deny
  $('.approve').click(function (e) {
    Materialize.toast('Comment Approved', 3000);
    e.preventDefault();
  });
  $('.deny').click(function (e) {
    Materialize.toast('Comment Denied', 3000);
    e.preventDefault();
  });

  // Quick Todos
  $('#todo-form').submit(function (e) {
    const output = `<li class="collection-item">
          <div>${$('#todo').val()}
            <a href="#!" class="secondary-content delete">
              <i class="material-icons red-text">close</i>
            </a>
          </div>
        </li>`;

    $('.todos').append(output);
    $('#todo').val('');

    Materialize.toast('Todo Added', 3000);

    e.preventDefault();
  });

  // Delete Todos
  $('.todos').on('click', '.delete', function (e) {
    $(this).parent().parent().remove();
    Materialize.toast('Todo Removed', 3000);

    e.preventDefault();
  });

  CKEDITOR.replace('body');

});
