< script src = "https://code.jquery.com/jquery-1.12.4.js" > < /script> <
    script src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js" > < /script> <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js" > < /script> <
    script >
    $(function() {
        $("#nu_datebirth").datepicker({
            onSelect: function(value, ui) {
                var today = new Date(),
                    age = today.getFullYear() - ui.selectedYear;
                $('#a_ge').val(age);
            },

            dateFormat: 'dd-mm-yy',
            changeMonth: true,
            changeYear: true,
            yearRange: "c-100:c+0",
            maxDate: new Date()
        });

    }); <
/script> <
script >
    $("body").on('click', '.toggle-password', function() {
        $(this).toggleClass("fa-eye fa-eye-slash");

        var input = $("#psw");

        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
$.validator.addMethod('pass', function(value, element) {
        return this.optional(element) || (value.match(/[a-z]/) && value.match(/[0-9]/) && value.match(/[A-Z]/) && value.match(/[! @ # $ % ^ & *]/));
    },
    'Password Must contain at <br> least one number and one<br>  uppercase <br> and lowercase letter and special <br> characters and at least 8 or <br>more characters');

$.validator.addMethod('inp', function(value, element) {
        return this.optional(element) || /^[A-Z ]+$/i.test(value);
    },
    'this characters not allowed');
$.validator.addMethod('em', function(value, element) {
        return this.optional(element) || /^[A-Z a-z .]+$/i.test(value);
    },
    'this characters not allowed');

$(document).ready(function() {
        $("#form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                    inp: true


                },
                email: {
                    required: true
                },
                pass: {
                    required: true,
                    pass: true,
                    minlength: 8
                },
                pass1: {
                    required: true,
                    equalTo: '#psw',
                    minlength: 8
                }

            }
        })
    }) <
    /script>