This is a test project done by me, Michael Reyfman in July 2017. It is a rewritten front-end part of my old coursework and it imitates a work of a taxi car park.

[Features]
- Has a registration form for passengers and drivers
- After a passanger makes an order, it is added into driver terminal where it can be accepted by every driver
- Has own userpage for passenger and driver where they can view and complete orders, change their profile etc
- User can undo their order before they are accepted by one of the drivers, they are erased from the terminal
- Driver also can undo their orders, their status are changed from ACCEPTED to WAITING
- Completed orders are erased from the terminal

[Changelog]
July 15:
- Created a project
- Added navigation panel
- Added login and separate registration forms with phone/car number masks
- Added models for orders, drivers and passengers
- Users and orders are stored in arrays (it's just a front-end part
July 16:
- Finished making a form for drivers
- Added react router in order to manage pages and hide a registration form
- Added ability to log out
- Added a prototype of an order form (only for passengers, uses data from their profile)
August 15 (so far):
- Completely rewritten project using Redux
- Added UI for main page
- Splitted registration by two routes

[TODO]
- Finish an order form
- Enable support for google maps
- Add driver terminal and userpages for drivers and passengers
