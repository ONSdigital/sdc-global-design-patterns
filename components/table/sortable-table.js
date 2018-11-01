function SortableTable(table) {

    var table = table;
    var status;
  
    var options = {};
    options.statusMessage = 'Sort by %heading% (%direction%)';
    options.ascendingText = 'ascending';
    options.descendingText = 'descending';
  
    createHeadingButtons();
    createStatusBox();
  
    function createHeadingButtons() {
      var headings = table.querySelectorAll('thead th');
      var heading;
  
      for (var i = 0; i < headings.length; i++) {
        heading = headings[i];
        if (heading.getAttribute('aria-sort')) {
          createHeadingButton(heading, i);
        }
      }
    };
  
  
    function createHeadingButton(heading, i) {
      var text = heading.textContent;
      var button = document.createElement('button')
      button.setAttribute('type', 'button')
      button.setAttribute('data-index', i)
      button.textContent = text
      button.addEventListener('click', sortButtonClicked)
      heading.textContent = '';
      heading.appendChild(button);
    };
  
  
    function sortButtonClicked(event) {
  
      var columnNumber = event.target.getAttribute('data-index')
      var sortDirection = event.target.parentElement.getAttribute('aria-sort')
      var newSortDirection;
      if (sortDirection === 'none' || sortDirection === 'ascending') {
        newSortDirection = 'descending';
      } else {
        newSortDirection = 'ascending';
      }
  
      var tBodies = table.querySelectorAll('tbody')
  
      sortTBodies(tBodies, columnNumber, newSortDirection)
  
      for (var i = tBodies.length - 1; i >= 0; i--) {
  
        var rows = getTableRowsArray(tBodies[i])
        var sortedRows = sort(rows, columnNumber, newSortDirection);
        addRows(tBodies[i], sortedRows);
  
      };
  
      removeButtonStates();
      updateButtonState(event.target, newSortDirection);
  
  
    }
  
    function sortTBodies(tBodies, columnNumber, sortDirection) {
  
      var tBodiesAsArray = []
  
      for (var i = 0; i < tBodies.length; i++) {
        tBodiesAsArray.push(tBodies[i])
      };
  
      var newTbodies = tBodiesAsArray.sort(function(tBodyA, tBodyB) {
  
        var tBodyAHeaderRow = tBodyA.querySelector('th[scope="rowgroup"]')
  
        var tBodyBHeaderRow = tBodyB.querySelector('th[scope="rowgroup"]')
  
  
        if (tBodyAHeaderRow && tBodyBHeaderRow) {
          tBodyAHeaderRow = tBodyAHeaderRow.parentElement
          tBodyBHeaderRow = tBodyBHeaderRow.parentElement
  
          var tBodyACell = tBodyAHeaderRow.querySelectorAll('td, th')[columnNumber]
          var tBodyBCell = tBodyBHeaderRow.querySelectorAll('td, th')[columnNumber]
  
          var tBodyAValue = getCellValue(tBodyACell)
          var tBodyBValue = getCellValue(tBodyBCell)
  
          return compareValues(tBodyAValue, tBodyBValue, sortDirection)
  
        } else {
  
          console.log('no way to compare tbodies')
          return 0
        }
  
  
      });
  
      for (var i = 0; i < newTbodies.length; i++) {
        table.append(newTbodies[i])
      };
  
  
  
    }
  
    function getTableRowsArray(tbody) {
      var rows = [];
      var trs = tbody.querySelectorAll('tr');
      for (var i = 0; i < trs.length; i++) {
        rows.push(trs[i]);
      }
      return rows;
    }
  
  
    function sort(rows, columnNumber, sortDirection) {
  
  
      var newRows = rows.sort(function(rowA, rowB) {
  
        var tdA = rowA.querySelectorAll('td, th')[columnNumber]
        var tdB = rowB.querySelectorAll('td, th')[columnNumber]
  
        var rowAIsHeader = rowA.querySelector('th[scope="rowgroup"]')
        var rowBIsHeader = rowB.querySelector('th[scope="rowgroup"]')
  
        var valueA = getCellValue(tdA)
        var valueB = getCellValue(tdB)
  
        if (rowAIsHeader) {
          return -1
        } else if (rowBIsHeader) {
          return 1
        } else {
  
          if (sortDirection === 'ascending') {
            if (valueA < valueB) {
              return -1;
            }
            if (valueA > valueB) {
              return 1;
            }
            return 0;
          } else {
            if (valueB < valueA) {
              return -1;
            }
            if (valueB > valueA) {
              return 1;
            }
            return 0;
          }
  
        }
  
      });
      return newRows
  
    };
  
  
    function getCellValue(cell) {
  
      var cellValue = cell.getAttribute('data-sort-value') || cell.textContent
      cellValue = parseFloat(cellValue) || cellValue
  
      return cellValue
  
    }
  
  
    function addRows(tbody, rows) {
      for (var i = 0; i < rows.length; i++) {
        tbody.append(rows[i]);
      }
    };
  
  
    function removeButtonStates() {
  
      var tableHeaders = table.querySelectorAll('thead th')
  
      for (var i = tableHeaders.length - 1; i >= 0; i--) {
        tableHeaders[i].setAttribute('aria-sort', 'none')
      };
  
    };
  
  
    function updateButtonState(button, direction) {
      button.parentElement.setAttribute('aria-sort', direction);
      var message = options.statusMessage;
      message = message.replace(/%heading%/, button.textContent);
      message = message.replace(/%direction%/, options[direction + 'Text']);
      status.textContent = message;
    };
  
  
    function compareValues(valueA, valueB, sortDirection) {
  
      if (sortDirection === 'ascending') {
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
        return 0;
      } else {
        if (valueB < valueA) {
          return -1;
        }
        if (valueB > valueA) {
          return 1;
        }
        return 0;
      }
  
    }
  
  
    function createStatusBox() {
  
      status = document.createElement('div')
      status.setAttribute('aria-live', 'polite')
      status.setAttribute('role', 'status')
      status.setAttribute('aria-atomic', 'true')
      status.setAttribute('class', 'sortable-table-status')
  
      table.parentElement.insertBefore(status, table.nextSibling);
    };
  
  };