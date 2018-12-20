import tableSorter, {
  classTableSortable,
  classTableBody,
  jsSortableHeadings,
} from 'table/sortable-table';

const strTemplate = `
<table class="table ${classTableSortable}" data-aria-sort="Sort by" data-aria-asc="ascending" data-aria-desc="descending">
    <caption class="table__caption">Javascript enhanced sortable table</caption>
    <thead class="table__head"> 
        <tr class="table__row">
            <th scope="col" class="table__header" aria-sort="none">ID</th>
            <th scope="col" class="table__header" aria-sort="none">Title</th>
            <th scope="col" class="table__header" aria-sort="none">Abbreviation</th>
            <th scope="col" class="table__header" aria-sort="none">Legal basis</th>
            <th scope="col" class="table__header" aria-sort="none">Frequency</th>
            <th scope="col" class="table__header" aria-sort="none">Date</th>
            <th scope="col" class="table__header" aria-sort="none">Status</th>
        </tr>
    </thead>
    <tbody class="${classTableBody}">
        <tr class="table__row">
            <td role="cell" class="table__cell">023</td>
            <td role="cell" class="table__cell">Monthly Business Survey - Retail Sales Index</td>
            <td role="cell" class="table__cell">RSI</td>
            <td role="cell" class="table__cell">Statistics of Trade Act 1947</td>
            <td role="cell" class="table__cell" data-sort-value="1">Monthly</td>
            <td role="cell" class="table__cell" data-sort-value="2018-01-20">20 Jan 2018</td>
            <td role="cell" class="table__cell" data-sort-value="0"><span class="status status--success">Ready</span></td>
        </tr>
        <tr class="table__row">
            <td role="cell" class="table__cell">112</td>
            <td role="cell" class="table__cell" data-th="Title">Annual Inward Foreign Direct Investment Survey</td>
            <td role="cell" class="table__cell">AIFDI</td>
            <td role="cell" class="table__cell">Statistics of Trade Act 1947</td>
            <td role="cell" class="table__cell" data-sort-value="12">Annually</td>
            <td role="cell" class="table__cell" data-sort-value="2018-02-26">26 Feb 2018</td>
            <td role="cell" class="table__cell" data-sort-value="1"><span class="status status--warning">Not ready</span></td>
        </tr>
        <tr class="table__row">
            <td role="cell" class="table__cell">332</td>
            <td role="cell" class="table__cell">Business Register and Employment Survey</td>
            <td role="cell" class="table__cell">BRES</td>
            <td role="cell" class="table__cell">Statistics of Trade Act 1947</td>
            <td role="cell" class="table__cell" data-sort-value="12">Annually</td>
            <td role="cell" class="table__cell" data-sort-value="2013-01-23">23 Jan 2013</td>
            <td role="cell" class="table__cell" data-sort-value="2"><span class="status status--info">In progress</span></td>
        </tr>
        <tr class="table__row">
            <td role="cell" class="table__cell">654</td>
            <td role="cell" class="table__cell">Quartely Survey of Building Materials Sand and Gravel</td>
            <td role="cell" class="table__cell">QBMS</td>
            <td role="cell" class="table__cell">Statistics of Trade Act 1947 - BEIS</td>
            <td role="cell" class="table__cell" data-sort-value="3">Quartely</td>
            <td role="cell" class="table__cell" data-sort-value="2015-01-24">24 Jan 2015</td>
            <td role="cell" class="table__cell" data-sort-value="3"><span class="status status--error">Issue</span></td>
        </tr>
        <tr class="table__row">
            <td role="cell" class="table__cell">765</td>
            <td role="cell" class="table__cell">Monthly Survey of Building Materials Concrete Building Blocks</td>
            <td role="cell" class="table__cell">MSBB</td>
            <td role="cell" class="table__cell">Voluntary</td>
            <td role="cell" class="table__cell" data-sort-value="1">Monthly</td>
            <td role="cell" class="table__cell" data-sort-value="2014-01-25">25 Jan 2014</td>
            <td role="cell" class="table__cell" data-sort-value="0"><span class="status status--success">Ready</span></td>
        </tr>
    </tbody>
</table>
`;

let elTemplate, originalValues = [], sortedValues = [];

describe('Sortable table;', function() {
    before('Add template to DOM', function() {           
        let wrapper = document.createElement('div');
        wrapper.innerHTML = strTemplate;
        elTemplate = wrapper;
        document.body.appendChild(elTemplate);
     
        this.table = document.getElementsByClassName(classTableSortable)
        this.sortableHeadings = [...document.querySelectorAll(jsSortableHeadings)];
        
        this.tbody = this.table[0].getElementsByClassName(classTableBody);
        this.trs = this.tbody[0].querySelectorAll('tr');

        for (var i = 0; i < this.trs.length; i++) {
          const tdVal = this.trs[i].childNodes[1].textContent;
          originalValues.push(tdVal);
        }

        tableSorter();
    });

    it('DOM should contain the template', function() {
        expect(document.body.contains(elTemplate)).to.equal(true);
    });

    describe('When the DOM is ready', function() {

        it('should create a button element in each TH', function() {
            this.sortableHeadings.forEach(heading => {
                let headingChild = heading.childNodes[0].className;
                testAttributeValueEquals(headingChild, 'type', 'button');
            })
        });

        it('should create a status element with aria attributes', function() {
            const status = document.getElementsByClassName('sortable-table-status')[0];
            expect(status).to.exist;
            expect(status.getAttribute('aria-live')).to.equal('polite');
            expect(status.getAttribute('role')).to.equal('status');
            expect(status.getAttribute('aria-atomic')).to.equal('true');
        });

        describe('Each sort button element', function() {
            it('should contain an aria-label attribute', function() {
                this.sortableHeadings.forEach(heading => {
                    let button = heading.childNodes[0];
                    let headingText = heading.textContent;
                    expect(button.getAttribute('aria-label')).to.equal('Sort by ' + headingText);
                })
            });

            it('should contain a data-index attribute', function() {
                this.sortableHeadings.forEach((heading, i) => {
                    let headingChild = heading.childNodes[0];
                    expect(headingChild.getAttribute('data-index')).to.equal(''+i+'');
                })
            });

            it('should be given the class "table__sort-button"', function() {
                this.sortableHeadings.forEach(heading => {
                    let headingChild = heading.childNodes[0];
                    expect(headingChild.getAttribute('class')).to.equal('table__sort-button');
                })
            });
        });

        describe('When a sort button is clicked', function() {
            before('Click the first button', function() {
                this.sortableHeadings[0].childNodes[0].click();
            });

            it('should be given the aria-sort vale of descending', function() {
                const th = this.sortableHeadings[0];
                expect(th.getAttribute('aria-sort')).to.equal('descending');
            });

            it('should set all other aria-sort values to none', function() {
                for (let i=1; i < this.sortableHeadings.length; i++) {
                    expect(this.sortableHeadings[i].getAttribute('aria-sort')).to.equal('none');
                }
            });

            it('should sort the column into descending order', function() {
                originalValues.reverse();

                const trs = this.tbody[0].querySelectorAll('tr');
                trs.forEach(tr => {
                    const tdVal = tr.childNodes[1].textContent;
                    sortedValues.push(tdVal);
                });

                expect(originalValues.join()).to.equal(sortedValues.join());
            });

            it('should update the aria-live status', function() {
                const status = document.getElementsByClassName('sortable-table-status')[0].textContent;
                const headingText = this.sortableHeadings[0].textContent;
                expect(status).to.equal('Sort by ' + headingText + ' (descending)');
            });
        });

        describe('When a sort button is clicked again', function() {
            before('Click the first button', function() {
                this.sortableHeadings[0].childNodes[0].click();
            });

            it('should be given the aria-sort vale of ascending', function() {
                const th = this.sortableHeadings[0];
                expect(th.getAttribute('aria-sort')).to.equal('ascending');
            });

            it('should sort the column into ascending order', function() {                
                sortedValues = [];
                originalValues.reverse();

                const trs = this.tbody[0].querySelectorAll('tr');
                trs.forEach(tr => {
                    const tdVal = tr.childNodes[1].textContent;
                    sortedValues.push(tdVal);
                });

                expect(originalValues.join()).to.equal(sortedValues.join());
            });
        });
    });
});

function testAttributeValueEquals(className, attribute, value) {
  const elements = document.getElementsByClassName(className);

  for (let i=0; i < elements.length; i++) {
    expect(elements[i].getAttribute(attribute)).to.equal(value);
  }
}
