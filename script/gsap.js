// document.body.classList.add("main-no-scroll");

document.addEventListener('DOMContentLoaded', function () {
    // window.addEventListener("resize", function () {
    //     preloader();
    //     // setTimeout(function () {
    //     //     preloader();
    //     // }, 500)
    // });
    preloader();
});

function preloader() {
    let preloader;
    if (document.getElementById("start-full-logo") != null && document.getElementById("start-full-logo") != undefined) {
        preloader = document.getElementById("start-full-logo");
        document.body.classList.add("active-preloader");

        window.scrollTo(0, 0);

        // svg elements
        getSvgPosition();

        // header
        let headerblck;
        if (document.querySelector("header") != null && document.querySelector("header") != undefined) {
            headerblck = document.querySelector("header");
            headerblck.style.display = "none";
        }
        // main
        let mainblck;
        if (document.querySelector("main") != null && document.querySelector("main") != undefined) {
            mainblck = document.querySelector("main");
            mainblck.style.display = "none";
        }
        // footer
        // main
        let footerblck;
        if (document.querySelector("footer") != null && document.querySelector("footer") != undefined) {
            footerblck = document.querySelector("footer");
            footerblck.style.display = "none";
        }

        document.querySelector(".main-path-1").style.transform = "scale(4)";
        getSvgPosition();

        let btnPr;
        if (document.getElementById("btn-preloader") != null && document.getElementById("btn-preloader") != undefined) {
            btnPr = document.getElementById("btn-preloader");
            let scr = 0;
            btnPr.onclick = function () {
                scr += ((((preloader.offsetHeight - window.innerHeight) / 2)) / 6) * 1;
                window.scrollTo(0, scr);
            }
        }

        window.addEventListener("scroll", function (e) {


            // letter 1
            if (pageYOffset >= ((((preloader.offsetHeight - window.innerHeight) / 2)) / 6) * 1) {
                var offset = window.pageYOffset;
                var wheight = window.innerHeight;
                var html = document.documentElement;
                var docheight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight);
                var progress = offset / (docheight - wheight);
                // document.querySelector("#Gradient1").setAttribute("y1", ((90 + progress * 410) / 10) * 2 + "%");

                // letter 2
                setTimeout(function () {
                    // preloader.style.height = "100vh";
                    document.querySelector(".main-path-1").style.transform = "scale(3)";
                    document.querySelector(".main-path-2").style.transform = "scale(3)";

                    document.querySelector(".main-path-3").style.transform = "scale(3)";
                    document.querySelector(".main-path-4").style.transform = "scale(3)";
                    document.querySelector(".main-path-5").style.transform = "scale(3)";
                    document.querySelector(".main-path-6").style.transform = "scale(3)";
                    document.querySelector(".main-path-7").style.transform = "scale(3)";

                    document.querySelector(".main-path-2").style.display = "flex";
                    setTimeout(function () {
                        document.querySelector(".main-path-2").style.visibility = "visible";
                        document.querySelector(".main-path-2").style.opacity = 1;
                    }, 100)
                    getSvgPosition();

                    // letter 3
                    setTimeout(function () {
                        document.querySelector(".main-path-1").style.transform = "scale(2.5)";
                        document.querySelector(".main-path-2").style.transform = "scale(2.5)";
                        document.querySelector(".main-path-3").style.transform = "scale(2.5)";

                        document.querySelector(".main-path-4").style.transform = "scale(2.5)";
                        document.querySelector(".main-path-5").style.transform = "scale(2.5)";
                        document.querySelector(".main-path-6").style.transform = "scale(2.5)";
                        document.querySelector(".main-path-7").style.transform = "scale(2.5)";

                        document.querySelector(".main-path-3").style.display = "flex";
                        setTimeout(function () {
                            document.querySelector(".main-path-3").style.visibility = "visible";
                            document.querySelector(".main-path-3").style.opacity = 1;
                        }, 100)

                        getSvgPosition();

                        // letter 4
                        setTimeout(function () {
                            document.querySelector(".main-path-1").style.transform = "scale(2)";
                            document.querySelector(".main-path-2").style.transform = "scale(2)";
                            document.querySelector(".main-path-3").style.transform = "scale(2)";
                            document.querySelector(".main-path-4").style.transform = "scale(2)";

                            document.querySelector(".main-path-5").style.transform = "scale(2)";
                            document.querySelector(".main-path-6").style.transform = "scale(2)";
                            document.querySelector(".main-path-7").style.transform = "scale(2)";

                            document.querySelector(".main-path-4").style.display = "flex";
                            setTimeout(function () {
                                document.querySelector(".main-path-4").style.visibility = "visible";
                                document.querySelector(".main-path-4").style.opacity = 1;
                            }, 100)

                            getSvgPosition();

                            // letter 5
                            setTimeout(function () {
                                document.querySelector(".main-path-1").style.transform = "scale(1.5)";
                                document.querySelector(".main-path-2").style.transform = "scale(1.5)";
                                document.querySelector(".main-path-3").style.transform = "scale(1.5)";
                                document.querySelector(".main-path-4").style.transform = "scale(1.5)";
                                document.querySelector(".main-path-5").style.transform = "scale(1.5)";
                                document.querySelector(".main-path-7").style.transform = "scale(1.5)";

                                document.querySelector(".main-path-5").style.display = "flex";
                                setTimeout(function () {
                                    document.querySelector(".main-path-5").style.visibility = "visible";
                                    document.querySelector(".main-path-5").style.opacity = 1;
                                }, 100)

                                getSvgPosition();
                                // letter 6
                                setTimeout(function () {
                                    document.querySelector(".main-path-1").style.transform = "scale(1.2)";
                                    document.querySelector(".main-path-2").style.transform = "scale(1.2)";
                                    document.querySelector(".main-path-3").style.transform = "scale(1.2)";
                                    document.querySelector(".main-path-4").style.transform = "scale(1.2)";
                                    document.querySelector(".main-path-5").style.transform = "scale(1.2)";
                                    document.querySelector(".main-path-6").style.transform = "scale(1.2)";
                                    document.querySelector(".main-path-7").style.transform = "scale(1.2)";

                                    document.querySelector(".main-path-6").style.display = "flex";
                                    setTimeout(function () {
                                        document.querySelector(".main-path-6").style.visibility = "visible";
                                        document.querySelector(".main-path-6").style.opacity = 1;
                                    }, 100)

                                    getSvgPosition();

                                    // letter 7
                                    setTimeout(function () {
                                        document.querySelector(".main-path-1").style.transform = "scale(1.1)";
                                        document.querySelector(".main-path-2").style.transform = "scale(1.1)";
                                        document.querySelector(".main-path-3").style.transform = "scale(1.1)";
                                        document.querySelector(".main-path-4").style.transform = "scale(1.1)";
                                        document.querySelector(".main-path-5").style.transform = "scale(1.1)";
                                        document.querySelector(".main-path-6").style.transform = "scale(1.1)";
                                        document.querySelector(".main-path-7").style.transform = "scale(1.1)";

                                        document.querySelector(".main-path-7").style.display = "flex";
                                        setTimeout(function () {
                                            document.querySelector(".main-path-7").style.visibility = "visible";
                                            document.querySelector(".main-path-7").style.opacity = 1;
                                        }, 100)

                                        getSvgPosition();

                                        // end
                                        setTimeout(function () {
                                            preloader.style.display = "none";
                                            if (document.body.classList.contains("active-preloader") == true) {
                                                window.scrollTo(0, 0);

                                                headerblck.style.display = "flex";
                                                mainblck.style.display = "flex";
                                                footerblck.style.display = "flex";

                                                setTimeout(function () {
                                                    window.scrollTo(0, 0);
                                                    document.body.classList.remove("active-preloader");

                                                    document.querySelector('#t2 h1').classList.add('_active-scrll-anim')

                                                    $('#m-proud_slider').slick("refresh");
                                                }, 200);
                                            }
                                        }, 500);
                                    }, 250);
                                }, 250);
                            }, 250);

                        }, 250);
                    }, 250);
                }, 500)
            }



            // // letter 2
            // if (pageYOffset >= ((((preloader.offsetHeight - window.innerHeight) / 2)) / 7) * 1) {
            //     document.querySelector(".main-path-2").style.display = "flex";
            //     document.querySelector(".main-path-1 path").style.transform = "scale(3)";
            //     document.querySelector(".main-path-2 path").style.transform = "scale(3)";
            //     getSvgPosition();
            // } else {
            //     document.querySelector(".main-path-2").style.display = "none";
            //     getSvgPosition();
            // }

            // letter 3
            // if (pageYOffset >= ((((preloader.offsetHeight - window.innerHeight) / 2)) / 7) * 2) {
            //     document.querySelector(".main-path-3").style.display = "flex";
            //     document.querySelector(".main-path-1 path").style.transform = "scale(2.5)";
            //     document.querySelector(".main-path-2 path").style.transform = "scale(2.5)";
            //     document.querySelector(".main-path-3 path").style.transform = "scale(2.5)";
            //     getSvgPosition();
            // } else {
            //     document.querySelector(".main-path-3").style.display = "none";
            //     getSvgPosition();
            // }

            // letter 4
            // if (pageYOffset >= ((((preloader.offsetHeight - window.innerHeight) / 2)) / 7) * 3) {
            //     document.querySelector(".main-path-4").style.display = "flex";
            //     document.querySelector(".main-path-1 path").style.transform = "scale(2)";
            //     document.querySelector(".main-path-2 path").style.transform = "scale(2)";
            //     document.querySelector(".main-path-3 path").style.transform = "scale(2)";
            //     document.querySelector(".main-path-4 path").style.transform = "scale(2)";
            //     getSvgPosition();
            // } else {
            //     document.querySelector(".main-path-4").style.display = "none";
            //     getSvgPosition();
            // }

            // letter 5
            // if (pageYOffset >= ((((preloader.offsetHeight - window.innerHeight) / 2)) / 7) * 4) {
            //     document.querySelector(".main-path-5").style.display = "flex";
            //     document.querySelector(".main-path-1 path").style.transform = "scale(1.5)";
            //     document.querySelector(".main-path-2 path").style.transform = "scale(1.5)";
            //     document.querySelector(".main-path-3 path").style.transform = "scale(1.5)";
            //     document.querySelector(".main-path-4 path").style.transform = "scale(1.5)";
            //     document.querySelector(".main-path-5 path").style.transform = "scale(1.5)";
            //     getSvgPosition();
            // } else {
            //     document.querySelector(".main-path-5").style.display = "none";
            //     getSvgPosition();
            // }


            // letter 6
            // if (pageYOffset >= ((((preloader.offsetHeight - window.innerHeight) / 2)) / 7) * 5) {
            //     document.querySelector(".main-path-6").style.display = "flex";
            //     document.querySelector(".main-path-1 path").style.transform = "scale(1.2)";
            //     document.querySelector(".main-path-2 path").style.transform = "scale(1.2)";
            //     document.querySelector(".main-path-3 path").style.transform = "scale(1.2)";
            //     document.querySelector(".main-path-4 path").style.transform = "scale(1.2)";
            //     document.querySelector(".main-path-5 path").style.transform = "scale(1.2)";
            //     document.querySelector(".main-path-6 path").style.transform = "scale(1.2)";
            //     getSvgPosition();
            // } else {
            //     document.querySelector(".main-path-6").style.display = "none";
            //     getSvgPosition();
            // }

            // letter 7
            // if (pageYOffset >= ((((preloader.offsetHeight - window.innerHeight) / 2)) / 7) * 5) {
            //     document.querySelector(".main-path-7").style.display = "flex";
            //     document.querySelector(".main-path-1 path").style.transform = "scale(1.1)";
            //     document.querySelector(".main-path-2 path").style.transform = "scale(1.1)";
            //     document.querySelector(".main-path-3 path").style.transform = "scale(1.1)";
            //     document.querySelector(".main-path-4 path").style.transform = "scale(1.1)";
            //     document.querySelector(".main-path-5 path").style.transform = "scale(1.1)";
            //     document.querySelector(".main-path-6 path").style.transform = "scale(1.1)";
            //     document.querySelector(".main-path-7 path").style.transform = "scale(1.1)";
            //     getSvgPosition();
            // } else {
            //     document.querySelector(".main-path-7").style.display = "none";
            //     getSvgPosition();
            // }

            // end
            // if (pageYOffset >= ((preloader.offsetHeight - window.innerHeight) / 2)) {
            //     preloader.style.display = "none";
            //     if (document.body.classList.contains("active-preloader") == true) {
            //         window.scrollTo(0, 0);

            //         headerblck.style.display = "flex";
            //         mainblck.style.display = "flex";
            //         footerblck.style.display = "flex";

            //         setTimeout(function () {
            //             window.scrollTo(0, 0);
            //             document.body.classList.remove("active-preloader");

            //             $('#m-proud_slider').slick("refresh");
            //         }, 200);
            //     }
            // }
        })
    }
}

function getSvgPosition() {
    let widthSvg = document.getElementById("main-svg-gs").getBBox().width / 2;
    let heightSvg = document.getElementById("main-svg-gs").getBBox().height / 2;
    document.getElementById("main-svg-gs").style.transform = "translate(calc(50% - " + widthSvg + "px) , calc(50% - " + heightSvg + "px))";
}