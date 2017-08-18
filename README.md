# React Taxi
This is a test projects being done by Michael Reyfman. It is a rewritten front-end part of my old coursework and it imitates a mechanism of a taxi car park.

## Features
..* Has a registration form for passengers and drivers
..* After a passenger makes an order, it is added into driver terminal where it can be accepted by every driver
..* Own userpage for passenger and driver where they can view and complete orders and change their settings
..* User can undo their order before they are accepted by one of the drivers, then they are erased from the terminal
..* Driver also can undo their orders, order's status is changed from ACCEPTED to WAITING
..* Completed orders are erased from the terminal but saved in passenger's and driver's profiles.

## Changelog
#### July 15:
..* Created a project
..* Added navigation panel
..* Added login and separate registration forms with phone/car number masks
..* Added models for orders, drivers and passengers
..* Users and orders are stored in arrays (it's just a front-end part
#### July 16:
..* Finished making a form for drivers
..* Added react router in order to manage pages and hide a registration form
..* Added ability to log out
..* Added a prototype of an order form (only for passengers, uses data from their profile)
#### August 15 (so far):
..* Completely rewritten project using Redux
..* Added UI for main page
..* Splitted registration by two routes
#### August 17
..* Changed the way how active user is stored
..* Fixed all registration forms, added basic validation
#### August 18
..* Fixed content of the main page and pre-added users
..* Fixed README.md's appearance
..* Fixed private router of the userpage
..* Added some basic information and order table in profile

## TODO
..* Add orders to the user's order list
..* Add ability to change order status
..* Add google maps support
..* Fix fonts and some UI issues
