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


// fetch projects start
// function getProjects() {
//    return fetch("projects.json")
//        .then(response => response.json())
//        .then(data => {
//            return data
//        });
//}


//function showProjects(projects) {
//    let projectsContainer = document.querySelector(".work .box-container");
//    let projectsHTML = "";
//    projects.forEach(project => {
//        projectsHTML += `
//        <div class="grid-item ${project.category}">
//        <div class="box tilt" style="width: 380px; margin: 1rem">
//      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
//      <div class="content">
//        <div class="tag">
//        <h3>${project.name}</h3>
//        </div>
//        <div class="desc">
//          <p>${project.desc}</p>
//          <div class="btns">
//            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
//            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
//          </div>
//        </div>
//      </div>
//    </div>
//    </div>`
//    });
//    projectsContainer.innerHTML = projectsHTML;

    // vanilla tilt.js
    // VanillaTilt.init(document.querySelectorAll(".tilt"), {
    //     max: 20,
    // });
    // // vanilla tilt.js  

    // /* ===== SCROLL REVEAL ANIMATION ===== */
    // const srtop = ScrollReveal({
    //     origin: 'bottom',
    //     distance: '80px',
    //     duration: 1000,
    //     reset: true
    // });

    // /* SCROLL PROJECTS */
    // srtop.reveal('.work .box', { interval: 200 });

    // isotope filter products
//    var $grid = $('.box-container').isotope({
//        itemSelector: '.grid-item',
//        layoutMode: 'fitRows',
//        masonry: {
//            columnWidth: 200
//        }
//    });

    // filter items on button click
//    $('.button-group').on('click', 'button', function () {
//        $('.button-group').find('.is-checked').removeClass('is-checked');
//        $(this).addClass('is-checked');
//        var filterValue = $(this).attr('data-filter');
//        $grid.isotope({ filter: filterValue });
//    });
//}

function showPublications(publications) {
    let publicationsContainer = document.querySelector(".publications-list .box-container");
    let publicationsHTML = "";
    publications.forEach(publication => {
        publicationsHTML += `
        <div class="grid-item ${publication.category}">
        <div class="box" style="width: 380px; margin: 1rem">
          <h3>${publication.name}</h3>
          <p>${publication.desc}</p>
          <a href="${publication.link}" class="btn" target="_blank">Read More</a>
        </div>
        </div>`;
    });
    publicationsContainer.innerHTML = publicationsHTML;

    // isotope filter publications
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

// 버튼 클릭 이벤트 설정
document.querySelectorAll('.button-group .btn').forEach(button => {
    button.addEventListener('click', function () {
        // 모든 버튼의 is-checked 클래스 제거
        document.querySelectorAll('.button-group .btn').forEach(btn => {
            btn.classList.remove('is-checked');
        });

        // 현재 클릭된 버튼에 is-checked 클래스 추가
        this.classList.add('is-checked');

        // data-filter 값을 가져와 필터링 동작 수행
        const filterValue = this.getAttribute('data-filter');
        document.querySelectorAll('.publications-list ul').forEach(list => {
            if (filterValue === '*' || list.classList.contains(filterValue.substring(1))) {
                list.style.display = 'block'; // 필터 조건에 맞는 경우 표시
            } else {
                list.style.display = 'none'; // 필터 조건에 맞지 않는 경우 숨김
            }
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
