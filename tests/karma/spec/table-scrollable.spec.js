import tableScroller, {
  classTableScrollable,
  classTableScrollableContent,
  classTable,
} from 'table/scrollable-table';

const strTemplate = `
<div class="${classTableScrollable}" style="position:relative">
    <div class="${classTableScrollableContent}" style="width:100%; overflow:visible; overflow-x: scroll" tabindex="0" role="region" aria-label="A scrollable table. There are 7 columns in this table. Some of the table may be off screen. Scroll or drag horizontally to bring into view.">
        <table class="${classTable}">
            <caption class="table__caption">A scrollable table</caption>
            <thead class="table__head">
                <tr class="table__row">
                    <th scope="col" class="table__header">ID</th>
                    <th scope="col" class="table__header">Title</th>
                    <th scope="col" class="table__header">Abbreviation</th>
                    <th scope="col" class="table__header">Legal basis</th>
                    <th scope="col" class="table__header">Frequency</th>
                    <th scope="col" class="table__header">Date</th>
                    <th scope="col" class="table__header">Status</th>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr class="table__row">
                    <td role="cell" class="table__cell">023</td>
                    <td role="cell" class="table__cell">Monthly Business Survey - Retail Sales Index</td>
                    <td role="cell" class="table__cell">RSI</td>
                    <td role="cell" class="table__cell">Statistics of Trade Act 1947</td>
                    <td role="cell" class="table__cell">Monthly</td>
                    <td role="cell" class="table__cell">20 Jan 2018</td>
                    <td role="cell" class="table__cell"><span class="status status--success">Ready</span></td>
                </tr>
                <tr class="table__row">
                    <td role="cell" class="table__cell">112</td>
                    <td role="cell" class="table__cell" data-th="Title">Annual Inward Foreign Direct Investment Survey</td>
                    <td role="cell" class="table__cell">AIFDI</td>
                    <td role="cell" class="table__cell">Statistics of Trade Act 1947</td>
                    <td role="cell" class="table__cell">Annually</td>
                    <td role="cell" class="table__cell">26 Feb 2018</td>
                    <td role="cell" class="table__cell"><span class="status status--warning">Not ready</span></td>
                </tr>
                <tr class="table__row">
                    <td role="cell" class="table__cell">332</td>
                    <td role="cell" class="table__cell">Business Register and Employment Survey</td>
                    <td role="cell" class="table__cell">BRES</td>
                    <td role="cell" class="table__cell">Statistics of Trade Act 1947</td>
                    <td role="cell" class="table__cell">Annually</td>
                    <td role="cell" class="table__cell">23 Jan 2013</td>
                    <td role="cell" class="table__cell"><span class="status status--info">In progress</span></td>
                </tr>
                <tr class="table__row">
                    <td role="cell" class="table__cell">654</td>
                    <td role="cell" class="table__cell">Quartely Survey of Building Materials Sand and Gravel</td>
                    <td role="cell" class="table__cell">QBMS</td>
                    <td role="cell" class="table__cell">Statistics of Trade Act 1947 - BEIS</td>
                    <td role="cell" class="table__cell">Quartely</td>
                    <td role="cell" class="table__cell">24 Jan 2015</td>
                    <td role="cell" class="table__cell"><span class="status status--error">Issue</span></td>
                </tr>
                <tr class="table__row">
                    <td role="cell" class="table__cell">765</td>
                    <td role="cell" class="table__cell">Monthly Survey of Building Materials Concrete Building Blocks</td>
                    <td role="cell" class="table__cell">MSBB</td>
                    <td role="cell" class="table__cell">Voluntary</td>
                    <td role="cell" class="table__cell">Monthly</td>
                    <td role="cell" class="table__cell">25 Jan 2014</td>
                    <td role="cell" class="table__cell"><span class="status status--success">Ready</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`;

let elTemplate, mobile;

describe('Scrollable table;', function() {

    describe('when the viewport is small,', function() {

        beforeEach(() => {
            viewport.set(900);
            mobile = true
            attachTemplate();
        });

        describe('When the table component attaches to the DOM,', function() {
            const scrollBox = document.getElementsByClassName(classTableScrollableContent);

            it('DOM should contain the template', function() {
                expect(document.body.contains(elTemplate)).to.equal(true);
            });

            it('should add shadow elements', function() {
                const leftShadowElement = document.getElementsByClassName('left-shadow')[0];
                const rightShadowElement = document.getElementsByClassName('right-shadow')[0];
                expect(document.body.contains(leftShadowElement)).to.equal(true);
                expect(document.body.contains(rightShadowElement)).to.equal(true);
            });
        
            describe('When the table component is scrolled,', function() {

                beforeEach('Scroll table', function() {
                    scrollBox[0].scrollLeft = 10;
                });

                it('should show both shadow elements', function(done) {
                    setTimeout(function(){
                        const leftShadowVisible = document.querySelector('.left-shadow.visible');
                        const rightShadowVisible = document.querySelector('.right-shadow.visible');
                        expect(document.body.contains(leftShadowVisible)).to.equal(true);
                        expect(document.body.contains(rightShadowVisible)).to.equal(true);
                        done();
                    }, 200);
                })

            });
        });

    });
});


function attachTemplate() {
    let wrapper = document.createElement('div');
    wrapper.innerHTML = strTemplate;
    elTemplate = wrapper;
    document.body.appendChild(elTemplate);

    if (mobile) { document.getElementsByClassName(classTable)[0].style.width = '101%' }
    tableScroller();
}
  
