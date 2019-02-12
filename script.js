let init, dom_strings;
{
    dom_strings = {
        btn_source_code: ".btn-source",
        top_text: ".top-text",
        project_list_container: ".list-container"
    };

    let init_projects;
    {
        init_projects = function (){
            let project_list, html_placeholder, i;
            i = 0;
            project_list = ['ProjectM', 'Morse-Code', 'Coming Soon', 'Coming Soon', 'Coming Soon'];
            while (i < project_list.length){
                html_placeholder =
                "<li class=\"project\"><div class=\"project-name\">%project_name%</div><div class=\"preview\">" +
                "<img src=\"Projects/%project_name%/img/icon.png\"></img></div><div class=\"skills\">SKILLS</div>" +
                "<div class=\"links\"><button class=\"btn-download\">Download</button>" +
                "<button class=\"btn-source\">Source Code</button></div></li>";
                html_final = html_placeholder.replace(/%project_name%/g, project_list[i]);
                document.querySelector(dom_strings.project_list_container).insertAdjacentHTML('beforeend', html_final);
                i++;
            }
        };
    };

    let redirect = function(event){
        let childs, project_name, redirect_to;
        childs = event.target.parentNode.parentNode.childNodes;
        project_name = childs[0].textContent.trim();
        redirect_to = `https://github.com/jeeej/${project_name}`;
        if(window.location.href == 'https://jeeej.github.io' || window.location.href == `file:///home/jeeej/Portfolio/index.html`)
            window.location.href=redirect_to;
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
        init_projects();
        setup_event_listener();
    };
}

init();
