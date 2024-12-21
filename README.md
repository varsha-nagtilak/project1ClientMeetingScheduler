# project1ClientMeetingScheduler
Demo Project created for Simple Learn course. 
## Database:
### Create Database
create database clientManagementApp;
use clientManagementApp;
### Create User Table
create table user(id int not null primary key auto_increment,name varchar(50) not null,email varchar(100) not null,  password varchar(100) not null, address text);
### Create Meetings Table:
create table meeting(id int not null primary key auto_increment,topic varchar(50) not null,noOfPeoples int, startDateTime varchar(50) not null,  endDateTime varchar(50) not null, userId int);
 
## Code Setup:
   ### Server: 
   #### Open Server folder in Terminal:
    cd server
   #### Install Dependencies:
     npm install
   #### Run Server:
     node sever.js

### Client:
#### Open Client folder in Terminal:
    cd cleint
#### Install Dependencies:
     npm install
#### Run Client App:
     ng serve -o
