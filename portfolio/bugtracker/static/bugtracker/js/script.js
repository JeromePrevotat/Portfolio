function init(){
  //Clickable Headers
  class SortableHeader{
    constructor(domElementId, colNumber, sortType){
      this.domElementId = domElementId;
      this.domElement = document.getElementById(domElementId);
      this.colNumber = colNumber;
      this.sortType = sortType

      this.domElement.addEventListener(
        "click", function(){sortTable(colNumber, sortType)});
    }
  };

  //Event Listenner
  //Headers
  PROJECT_TH = new SortableHeader("thProject", 0, "TEXT");
  STATUS_TH = new SortableHeader("thStatus", 1, "STATUS");
  SEVERITY_TH = new SortableHeader("thSeverity", 2, "SEVERITY");
  CREATED_TH = new SortableHeader("thCreated", 5, "DATE");
  UPDATED_TH = new SortableHeader("thUpdated", 6, "DATE");

  //Filters
  var projectFilter, statusFilter, severityFilter;
  projectFilter = document.getElementById("project-select");
  statusFilter = document.getElementById("status-select");
  severityFilter = document.getElementById("severity-select");

  projectFilter.addEventListener("change", function(){
    filterTable(
      projectFilter.options[projectFilter.selectedIndex].text,
      statusFilter.options[statusFilter.selectedIndex].text,
      severityFilter.options[severityFilter.selectedIndex].text
    )
  });
  statusFilter.addEventListener("change", function(){
    filterTable(
      projectFilter.options[projectFilter.selectedIndex].text,
      statusFilter.options[statusFilter.selectedIndex].text,
      severityFilter.options[severityFilter.selectedIndex].text
    )
  });
  severityFilter.addEventListener("change", function(){
    filterTable(
      projectFilter.options[projectFilter.selectedIndex].text,
      statusFilter.options[statusFilter.selectedIndex].text,
      severityFilter.options[severityFilter.selectedIndex].text
    )
  });

};

function filterTable(byProject, byStatus, bySeverity){
  var table = document.getElementById("dataTable");
  var i = 1;

  while (i < table.rows.length){
    if (filterOutTableRow(table.rows[i], byProject, byStatus, bySeverity)){
      table.rows[i].style.display = "none";
    }
    else{
      table.rows[i].style.display = "table-row";
    }
    i++;
  }
}

function filterOutTableRow(tRow, byProject, byStatus, bySeverity){
  var f1, f2, f3;
  f1 = 0;
  f2 = 1;
  f3 = 2;
  if(byProject != "-- By Project --"){
    if (tRow.cells[f1].innerText != byProject) return true;
  }
  if(byStatus != "-- By Status --"){
    if (tRow.cells[f2].innerText != byStatus) return true;
  }
  if(bySeverity != "-- By Severity --"){
    if (tRow.cells[f3].innerText != bySeverity) return true;
  }
  return false;
}

function sortTable(sortingCol, sortType){
    var table, rows, ordered, i, x, y, switchNeeded, switchMade = false;
    var table = document.getElementById("dataTable");
    var ordered = false;
    var order = "asc"

    //Loop until no more switch are needed
    while (!ordered) {
      rows = table.rows;
      //Exclude Header & Footer Rows from the loop
      for (i = 1; i < (rows.length - 2); i++) {
        switchNeeded = false;
        x = rows[i].getElementsByTagName("TD")[sortingCol];
        y = rows[i + 1].getElementsByTagName("TD")[sortingCol];
        if (switchNeeded = sortElements(x.innerHTML, y.innerHTML, sortType, order))
          break;
      }
      if (switchNeeded) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        ordered = false;
        switchMade = true
      }
      else ordered = true
      //Already asc sorted, so change to desc sorting
      if (!switchMade) {
        if (order == "asc") {
          order = "desc"
          ordered = false
        }
      }
    }
};

function sortElements(element1, element2, sortType, order){
  //Severity Sorting
  if (sortType == "SEVERITY"){
    var severityTable = ["Low", "Medium", "High", "Critical"],
    i = 0, e1 = -1, e2 = -1
    while(severityTable[i]){
      if (element1 == severityTable[i]) e1 = i;
      if (element2 == severityTable[i]) e2 = i;
      i++;
    }
    if (order == "asc"){
      if (e1 > e2) return true;
    }
    else if(order == "desc"){
      if (e1 < e2) return true;
    }
    return false;
  }
  //Status Sorting
  if (sortType == "STATUS"){
    var statusTable = ["Unconfirmed", "Confirmed", "Resolved"],
    i = 0, e1 = -1, e2 = -1
    while(statusTable[i]){
      if (element1 == statusTable[i]) e1 = i;
      if (element2 == statusTable[i]) e2 = i;
      i++;
    }
    if (order == "asc"){
      if (e1 > e2) return true;
    }
    else if(order == "desc"){
      if (e1 < e2) return true;
    }
    return false;
  }
  //Date Sorting
  if (sortType == "DATE"){
    if (order == "asc"){
      if (new Date(element1) > new Date(element2)) return true;
    }
    else if(order == "desc"){
      if (new Date(element1) < new Date(element2)) return true;
    }
  }
  //Text Sorting
  if (sortType == "TEXT") {
    if (order == "asc"){
      if (element1.toLowerCase() > element2.toLowerCase()) return true;
    }
    else if(order == "desc"){
      if (element1.toLowerCase() < element2.toLowerCase()) return true;
    }
  }
  return false;
}

/******************************************************************************/
/* Left Sidebar                                                               */
/******************************************************************************/

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("footer").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("footer").style.marginLeft = "0";
}

/******************************************************************************/
/* Accordion                                                                  */
/******************************************************************************/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


/******************************************************************************/
/* Toggle Dark Mode                                                           */
/******************************************************************************/
function toggleDarkMode(){
  document.getElementById("sidebar-container").classList.toggle("dark-mode");
  document.getElementById("main").classList.toggle("dark-mode");
  document.getElementById("footer").classList.toggle("dark-mode");
  document.getElementById("table-header").classList.toggle("dark-mode");
  document.getElementById("table-content").classList.toggle("dark-mode");
}



init();
