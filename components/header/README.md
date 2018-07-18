### Rationale
Currently there are three header variants that can be implemented on an SDC service; Standard, Hero, Thin.


### Usage

#### Standard
The standard header should be used across public facing SDC services.

#### Standard internal
The internal service variant of the standard header. Use the modifier `header---internal` when implementing for an internal service.

#### Hero 
The hero header allows for text to be added below the title. This should be used when the service would benefit from a description which informs users of what the service provides. 

#### Thin
The thin header should be used for internal facing services which have a less of a brand requirement and pages which contain many types of complex content.

#### Note
Additional elements can be added to the header such as buttons, services links and main navigation. References will be added here to those components when they become available.

#### Scope
Global

#### Dependencies
* `/components/_header.scss`
* `/components/_grid.scss`
* `/components/_logo.scss`
* `vars/_colours.sccs`
