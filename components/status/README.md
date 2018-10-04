### Rationale
Status indicators are used to present a system, page or element status to the user.

The status indicator should always be paired with a relevant and consistent term.

#### Success, Warning, Dead, Info, Error
For **'Success'** the term should indicate the successful completion or result of an operation or item.
Acceptable terms for 'Success' include:
* Ready
* Complete
* Success

The term should be contextually relevant to the service or item being indicated, it should also remain consistent throughout the journey for the user.

**Info** should be used where the item is 'neutral' in state. For example indicating that an item is 'Unread' would use `.status--info` as the item is not in a 'success', 'error', or 'warning' state.

### Variants
The `.status--small` may be applied to reduce the size of the status indicators. This is especially useful in areas of dense data or where the status is not of primary concern to the user but is a useful supplementary point of information.

### Research

### Usage

#### Dependencies
* `/components/_status.scss`
* `_colours.scss`
