# _Super Galactic Age Calculator_

#### _An application that returns age in years of different planets, 10.13.2017_

#### By _**Margaret Berry**_

## Description

_This application calculates a user's age on different planets based on their solar years.  It also calculates life expectancy on Earth and on other planets._

## Setup/Installation Requirements

_Clone the repository, then run the following commands in Terminal:_

* _$ npm install_
* _$ bower install_
* _$ gulp build_
* _$ gulp serve_

## Specifications

| Spec                                                         | Input                                                  | Output                |
|--------------------------------------------------------------|--------------------------------------------------------|-----------------------|
| Convert age into seconds.                                    | 32 years                                               | 1,009,152,000 seconds |
| Return the age of a human in Mercury years.                  | 32 Earth years                                         | 133 Mercury years     |
| Return the age of a human in Venus years.                    | 32 Earth years                                         | 52 Venus years        |
| Return the age of a human in Mars years.                     | 32 Earth years                                         | 17 Mars years         |
| Return the age of a human in Jupiter years.                  | 32 Earth years                                         | 3 Jupiter years       |
| Determine how many years a user has left to live on Earth.   | 32, female nonsmoker who exercises and lives in Africa | 39 years left         |
| Determine how many years a user has left to live on Mercury. | 32, female nonsmoker who exercises and lives in Africa | 163 years left        |
| Determine how many years a user has left to live on Venus.   | 32, female nonsmoker who exercises and lives in Africa | 63 years left         |
| Determine how many years a user has left to live on Mars.    | 32, female nonsmoker who exercises and lives in Africa | 21 years left         |
| Determine how many years a user has left to live on Jupiter. | 32, female nonsmoker who exercises and lives in Africa | 3 years left          |

## Known Bugs

_Accepts empty inputs_

_Continent selection does not show, although the value is stil captured._

_Currently, the age calculation is not very accurate, because it's based on the fixed year 2017.  Ideally, I would like to get it working with Moment.js._

## Support and contact details

_If you have any updates or suggestions please contact [Margaret] or make a contribution yourself._

[Margaret]: mailto:margaretshelaghmcgovern@gmail.com

## Technologies Used

* _JavaScript_
* _Node_
* _Bower_
* _Jasmine_
* _Karma_

### License

*MIT License*

Copyright (c) 2017 **_Margaret Berry_**
