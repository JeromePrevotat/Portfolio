let init, dom_strings;
{
    dom_strings = {
        modal_toggler: ".modal-toggler",
    };

    let build_modal = function(project_name, project_description, event){
        //Update modal infos with project infos
        $('#project-modal').on('show.bs.modal', function (event) {
            document.querySelector(".modal-title").textContent = project_name;
            document.querySelector(".modal-description").textContent = project_description;
        })
    };

    let setup_event_listener = function(){
        let all_projects = document.querySelectorAll(dom_strings.modal_toggler);
        for (let i = 0; i < all_projects.length; i++){
            all_projects[i].addEventListener("click", build_modal.bind(null, all_projects[i].dataset.name, all_projects[i].dataset.description), false);
        };
    };

    init = function(){
        setup_event_listener();
    };
}

init();
