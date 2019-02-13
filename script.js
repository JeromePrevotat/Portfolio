let init, dom_strings;
{
    dom_strings = {
        btn_source_code: ".btn-source",
        top_text: ".top-text"
    };

    let redirect = function(event){
        let childs, project_name, redirect_to;
        childs = event.target.parentNode.parentNode.childNodes;
        project_name = childs[1].textContent.trim();
        redirect_to = `https://github.com/jeeej/${project_name}`;
        console.log(redirect_to);
        if(window.location.href == 'https://jeeej.github.io' || window.location.href == `file:///home/jeeej/Portfolio/index.html`){
            console.log('IF');
            window.location.href=redirect_to;
        }
    };
    let setup_event_listener = function(){
        let download_buttons;
        download_buttons = document.querySelectorAll(dom_strings.btn_source_code);
        for (let i = 0; i < download_buttons.length; i++){
            download_buttons[i].addEventListener('click', redirect);
        }
    };
    let init_text = function(){
        let text;
        text = "Yolooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" +
        "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" +
        "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" +
        "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" +
        "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" +
        "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" +
        "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" +
        "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" +
        "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" +
        "oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo";
        document.querySelector(dom_strings.top_text).insertAdjacentHTML('beforeend', text);
    };
    init = function(){
        init_text();
        setup_event_listener();
    };
}

init();
