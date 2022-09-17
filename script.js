$(document).ready(function() {
    var row = 0,
      col = 0,
      ncol = 0;
    var sum;
    // sum by row
    $("tr").each(function(rowindex) {
      sum = 0;
      col = 0;
      $(this).find("td").each(function(colindex) {
        col++;
        newval = $(this).find("input").val();
        if (!isNaN(newval)){
          if (col > ncol) {
            ncol = col - 1
          }}
        else {
          sum += parseInt(newval);
        }
      });
    });
  
    // sum by col
    for (col = 1; col < ncol + 1; col++) {
      console.log("column: " + col);
      sum = 0;
      $("tr").each(function(rowindex) {
        $(this).find("td:nth-child(" + col + ")").each(function(rowindex) {
          newval = $(this).find("input").val();
          console.log(newval);
          if (!isNaN(newval)) {
            
            sum += parseInt(newval);
          }
        });
      });
    }
    $(".add-row").click(function(){
        var a = $("#a").val();
        var b = $("#b").val();
        var c = $("#c").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td><input type='number' value="+a+"> </td><td><input type='number' value="+b+" ></td><td><input type='number' value="+ c + "></td><td class='rowsum'>-</td></tr>";
        $("table tbody").prepend(markup);
    });
    $(".delete-row").click(function(){
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        });
    });
  });

  