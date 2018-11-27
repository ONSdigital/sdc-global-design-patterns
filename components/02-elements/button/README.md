### Rationale
Buttons are used to direct the user to perform a specific interaction. The copy used on the button should be clear, concise and direct.

## Variants

#### Primary
The primary button is used for the primary action for the user's context e.g to start a survey.

#### Primary - small
In certain circumstances there may be the need for multiple primary actions to exist on a page. The small primary button should be used in this scenario only when each action has the same context, for example, a list containing business surveys that a user needs to complete. 

#### Secondary
Secondary buttons should be used for supplementary actions which users can take. Secondary buttons cannot exist without a primary button in the same context.

#### Secondary - small
A small secondary button should be used within the same context of a primary small button when there is an additional action available along with the primary action.

#### Group

The `btn--group` wrapper class can be added with the `btn--group__item` element class when primary and secondary actions need to sit side-by-side. 

#### Ghost

The ghosted button is reserved for use in the header of an eQ service. It's function is to allow the user to save and logout of the current context.

#### Loader

The `btn--loader` class can be added to a button when there is a need to indicate to the user that the action taken place is waiting for a response i.e. uploading a file. This helps prevent user's from clicking buttons multiple times when they are unsure if the action they have carried out has worked.

#### Menu toggle

The menu toggle is used to show and hide a menu for mobile screen sizes. It will only display when the viewport is under `500px`. The button is controlled by javascript within the `navigation` component.

### Research

### Usage
The primary button is used throughout the eQ survey process as it is the primary action for the user to proceed. The copy used would be "Start survey" then "Save" on each answer submission.

#### Scope
Global

#### Dependencies
* `/components/_buttons.scss`
* `vars/_colours.sccs`
