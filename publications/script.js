$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Personal Website | Jung-In Seo";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Personal Website";
            $("#favicon").attr("href", "/assets/images/whitebear.jpg");
        }
    });

document.addEventListener("DOMContentLoaded", () => {
    // 초기 상태에서 모든 콘텐츠 표시
    document.querySelectorAll('.publications-list ul').forEach(list => {
        list.style.display = 'block'; // 모든 콘텐츠 표시
    });

    // 버튼 클릭 이벤트 설정
    document.querySelectorAll('.button-group .btn').forEach(button => {
        button.addEventListener('click', function () {
            // is-checked 클래스 업데이트
            document.querySelector('.button-group .is-checked').classList.remove('is-checked');
            this.classList.add('is-checked');

            // 필터링 로직
            const filterValue = this.getAttribute('data-filter');
            document.querySelectorAll('.publications-list ul').forEach(list => {
                if (filterValue === '*' || list.classList.contains(filterValue.substring(1))) {
                    list.style.display = 'block'; // 조건에 맞는 경우 표시
                } else {
                    list.style.display = 'none'; // 조건에 맞지 않는 경우 숨김
                }
            });
        });
    });
});




getProjects().then(data => {
    showProjects(data);
})
// fetch projects end

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
