function init(){
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

  PROJECT_TH = new SortableHeader("thProject", 0, "TEXT");
  STATUS_TH = new SortableHeader("thStatus", 1, "TEXT");
  SEVERITY_TH = new SortableHeader("thSeverity", 2, "SEVERITY");
  CREATED_TH = new SortableHeader("thCreated", 5, "DATE");
  UPDATED_TH = new SortableHeader("thUpdated", 6, "DATE");
};

init();

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
