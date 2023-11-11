let testElements = document.getElementsByClassName("wl-user");  
let haedIocns;
fetch('/assets/emoji/info.json').then((response) => response.json()).then((json) => haedIocns = json['items']);

function testCallBack() {
    Array.prototype.filter.call(
        testElements,
        function (testElement) {
            if (testElement.getElementsByTagName('img') != null)
            {
                var ele = testElement.getElementsByTagName('img')[0];
                if (ele.src.includes("/assets/avatar.png")) {  
                    var rand = Math.floor(Math.random() * haedIocns.length);
                    ele.src = "/assets/emoji/judai_"+ haedIocns[rand] + ".png"
                    ele.filters = 'alpha(opacity=40)';
                }
                // ele.classList.add('change-end');
                // testElement.innerHTML = '<img src="/assets/emoji/judai_'+ haedIocns[rand] +'.png">';
            }
        },
    );
}

// window.addEventListener('DOMContentLoaded', testCallBack());
setInterval("testCallBack()", "2000");

// /assets/avatar.png