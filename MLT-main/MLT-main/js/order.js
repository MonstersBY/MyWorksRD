function submitForm() {
    var form = $('#form1')[0];
    var formData = new FormData(form);
    $.ajax({
        type: 'POST',
        url: '/ajax/PHONE_FEEDBACK.php',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json', // Указываем, что ожидаем JSON-ответ
        success: function (response) {
            console.log(response);
            form.reset();
        },
        error: function (response) {
            // Обработка ошибки
            console.log(response);
        },
    });
}
