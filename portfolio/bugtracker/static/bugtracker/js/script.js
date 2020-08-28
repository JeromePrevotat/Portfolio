function sortTable(sortingCol){
    var table, rows, ordered, i, x, y, switchNeeded, switchMade = false;
    table = document.getElementById("dataTable");
    ordered = false;
    order = "asc"

    /* Loop until no more switch are needed */
    while (!ordered) {
      rows = table.rows;
      //Exclude Header & Footer Rows from the loop
      for (i = 1; i < (rows.length - 2); i++) {
        switchNeeded = false;
        x = rows[i].getElementsByTagName("TD")[sortingCol];
        y = rows[i + 1].getElementsByTagName("TD")[sortingCol];
        if (order == "asc")
        {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            switchNeeded = true;
            break;
          }
        } else if (order == "desc"){
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              switchNeeded = true;
              break;
            }
        }
      }
      if (switchNeeded) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        ordered = false;
        switchMade = true
      }
      else ordered = true
      if (!switchMade) {
        if (order == "asc") {
          order = "desc"
          ordered = false
        }
      }
    }
};
