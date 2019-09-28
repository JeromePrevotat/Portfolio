let init, dom_strings;
{
    dom_strings = {
        project_title: ".project-name",
        project_icon: ".project-icon",
    };

    let build_modal = function(event){
        //Get project infos
        let project_infos;
        project_infos = event.target.parentNode.parentNode.parentNode.childNodes;
        //Update modal infos with project infos
        $('#project-modal').on('show.bs.modal', function (event) {
            var modal = $(this)
            modal.find(".modal-title").text(project_infos[1].textContent.trim());
            modal.find(".modal-description").text(project_infos[3].textContent.trim());
        })
        //Display modal
        $(document.querySelectorAll(".modal")).modal();
    };

    let setup_event_listener = function(){
        let all_projects = document.querySelectorAll(dom_strings.project_icon);
        for (let i = 0; i < all_projects.length; i++){
            all_projects[i].addEventListener('click', build_modal);
        };
    };

    init = function(){
        setup_event_listener();
    };
}

init();
