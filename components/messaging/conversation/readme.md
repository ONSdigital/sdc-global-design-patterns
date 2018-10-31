### Overview

Conversations are assembled from a logical series of [message](message--internal) items.

The subject of the first message from this series determines the conversation subject.

The messages are displayed in ascending date order. Each conversation is grouped as a `<section>` with the section labelled by the conversation subject using `aria-label` to precede the subject with 'Conversation' may help to describe the grouping to users with assistive technology. By grouping the conversation within a `<section>` it is possible to produce a semantically valid page of multiple conversations.

Currently no additional styling is required for this component which is a collection of other sub-components.
