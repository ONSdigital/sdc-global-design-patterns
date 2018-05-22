### Rationale
Pagination used to navigate a series of pages in a linear or semi-linear manner. Pagination allows you to display a set of results so that the viewer isn’t overwhelmed by too much information.

Used to help users navigate between a large number of items that are distributed across multiple pages whenever there are too many items to show at once. This will be most useful in contexts such as [table](table) listings of data, search results, and directories.

What constitutes ‘too many’ for a user can be influenced by factors like:

- amount of data in each entry (consider and test cognitive load for users)
- system load times
- screen space

When the number of pages exceeds the maximum display limit, ellipsis (&hellip;) are used to truncate the remaining pages. Double truncation is used when the current page is separated by more than 7 pages from both the first and last page.

If the pagination component sits inline with other content on the page, then the pagination should be **left** aligned.

### Research

### Usage
Stings for translation of component to support additional languages (Note: language should match that of the containing page):

> - Pagination (Page {X} of {n})
> - Current page ({X} of {n})
> - Go to page {X}
> - Go to the first page
> - Go to the last page
> - Go to the next page (Page {n})
> - Go to the previous page (Page {n})
> - Next
> - Previous

#### Welsh / Cymraeg
> - Tudaleniad (Tudalen {X} o {n})
> - Y dudalen hon ({X} o {n})
> - Ewch i dudalen {X}
> - Ewch i’r dudalen gyntaf
> - Ewch i’r dudalen olaf
> - Ewch i’r dudalen nesaf (Tudalen {n})
> - Ewch i’r dudalen flaenorol (Tudalen {n})
> - Nesaf
> - Blaenorol

#### Scope
IUI

#### Dependencies
* `/components/_pagination.scss`
* `vars/_colours.sccs`
