$(document).ready(function () {
    $('#search').on('input', function () {
        let search = $(this).val();
        $.ajax({
            url: '/ajax/search/index.php',
            type: 'GET',
            dataType: 'html',
            data: { search: search },
            success: function (response) {
                $('.search_elements').html(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {},
        });
    });
});
