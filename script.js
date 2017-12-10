(function() {

    var dev = document.querySelector('.containAcceuil h2').textContent;
    var x = dev.fontcolor('red');
    console.log(x);

    var burger = document.querySelector('.burger');
    var home = document.querySelector('.home');
    var cross = document.querySelector('.cross');
    burger.addEventListener('click', function() {
        home.style.opacity = '1';
        burger.style.opacity = '0';
        cross.style.opacity = '1';
        burger.style.display = 'none';
    });

    cross.addEventListener('click', function() {
        home.style.opacity = '0';
        burger.style.opacity = '1';
        cross.style.opacity = '0';
        burger.style.display = 'block';
    });

    var a = document.querySelectorAll('.home a');

    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', function() {

            var test = "Julian";
            console.log(`salut ${test}`)

            var focus = document.querySelector('.focus');
            if (focus) {
                focus.classList.remove('focus');
            }

            this.classList.add('focus');

            var contentActive = document.querySelector('.containMenu div.active');
            contentActive.classList.remove('active');

            var href = this.getAttribute('href').slice(1);
            var content = document.getElementById(href);
            content.classList.add('active');
        });

        a[i].addEventListener('hover', function() {
            alert('ok');
            var picRed = document.querySelector('.redPic');
            picRed.style.opacity = 0.2;

        })
    }




    ///
    var input = document.querySelectorAll('.input');
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener('focus', function() {
            var label = this.previousElementSibling;
            label.style.opacity = 0;
        })

        input[i].addEventListener('blur', function() {
            var label = this.previousElementSibling;
            label.style.opacity = 1;

            if (this.value) {
                label.style.opacity = 0;
            } else {
                label.style.opacity = 1;
            }
        })
    }


    /// AJAX
    var form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'getForm.php', true);

        xhr.onload = function(event) {
            if (xhr.status == 200) {
                console.log('envoyé');
                var message = document.getElementById('texta');
                console.log(message);
            } else {
                console.log('echec');
            }
        };
        console.log(formData);
        xhr.send(formData);
    });


})();