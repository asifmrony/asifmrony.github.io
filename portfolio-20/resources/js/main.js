$(document).ready(function () {
    let $btns = $(".featured-projects .button-group button");

    console.log($btns);
    $btns.click(function (e) {
        $(".featured-projects .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".featured-projects .grid").isotope({
            filter: selector
        });

        return false;
    })

    $(".featured-projects .button-group #btn-all").trigger("click");


    $('.mp-container').magnificPopup({
        items: [{
                src: './resources/images/portfolio/p1.jpg',
                type: 'image'
            },
            {
                src: './resources/images/portfolio/p2.jpg',
                type: 'image'
            },
            {
                src: './resources/images/portfolio/p3.jpg',
                type: 'image'
            },
            {
                src: './resources/images/portfolio/p4.jpg',
                type: 'image'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image'
        // other options
    });
})