# MyDr
#### CNAM - Projet C2 2019  

### OVERVIEW
MyDr is a new platform to revolutionize the local healthcare market, by enabling patients to search, book and review medical specialists online. We strongly believe in the benefit of patient reviews and how they strengthen the patient-specialist relationship: empowering people to make informed decisions, as well as recognising the exceptional dedication of doctors and health specialists.


### PURPOSE
The main purpose of this project is to help patients find the best and nearest doctors for their health cases.


### SCOPE
* Develop a web application for patients and doctors
* Develop an Andorid mobile application for patients and doctors
* Develop a web admin portal for project owners


### FUNCTIONALITY
#### 1. Register/SignIn
Any User who has downloaded the mobile app or accessed the web app can register and create an account as patient or doctor. Then the user will be able to sign in to the app using their Google or Facebook account.

#### 2. User Profile
This is the current logged in user profile page, where they can view and edit their profile info like general personal information (name, age, address, phone number etc.), as well as information concerning the chosen profile type, such as a general medical history, allergies, taken pharmaceuticals, … in a patients’ case, or specialization, working years … if the user is a doctor.

#### 3. Find a Doctor
A patient can search for a doctor depending on the sickness, living region/area and the appointment time convenience (depending on the doctor schedule). Doctors will appear based on the doctors’ location, schedule availability, rating and reviews. The patient can choose any doctor and request an appointment.

#### 4. Doctor's Profile
Accessible by all kinds of users (other doctors and patients) at any time.
It contains:
* Added and Edited by the doctor:
    * the doctor's general info
    * the doctor's professional achievements
    * the free time on the doctor's schedule
* Added and Edited by the patients:
    * the reviews and ratings
* An interactive dashboard that serves as a doctor’s scorecard to track performance and workload. It helps doctors and end users to view and visualize details of patient load and availability, demographic distribution, and important performance indicators like average wait time and patient survey results.

    
#### 5. Patient's Profile
Accessible by doctors when given access by the patient.
It contains:
* Added and Edited by the patients:
    * the patient's general info
    * info concerning the patient's medical profile (such as diseases, allergies, medicaments that he takes, ...)
* Added and Edited by the doctor but approved by the patient:
    * Info about the patient's medical condition
    * prescribed medicaments
    * reminders for treatments (such as next visits, time to take the medicine, ...)

#### 6. Treatment Report
Accessible by the doctor and the patient only.
After the appointment or any kind of contact, the doctor can write a report about the patient's case, where he can include reminders, prescriptions, ...
When the doctor submits the form the patient will receive a notification about the report.
When the patient accepts/confirm the report all the medicaments, reminders, diseases, allergies, ... will be added to his medical profile. 

#### 7. Appointments  
A doctor specifies a schedule specific for the app's patients (for example, Mondays from 9 till 11 AM and Fridays from 1 till 4 PM). A patient can select an appointment from any of the time slots specified by the doctor. When a patient requests an appointment, the doctor is notified and should accept or reject the request. In both cases, the patient recieves a notifcation regarding the doctor's decision.
The doctor specifies the default duration for his appointments and can choose whether to accept or reject appointment requests out of the specified schedule.

#### 8. Blood Request/Donation  
Any user can post a request for a blood unit by specifying the name of the person in need, the hostpital name, and the blood type. Users who have specified their blood type and enabled the blood request notification setting in their profile page, will recieve a push notification when a blood unit same as their blood type is requested. 
At anytime, users can access the Blood Donation page and see blood units requested in nearby hospitals.

#### 9. Chat  
Live Chat feature allows users to chat with healthcare providers for queries and advice on various health issues. In addition the app allow to upload photos or medical reports to enable the healthcare professionals to better understand any of the health conditions.

#### 10. General Info  
A page that shows some general information, important phone numbers, and useful tips, for example: Emergency hotlines, Hospital numbers, ...

#### 11. Settings
A page to manage user preferences and app settings.

#### 12. Admin Portal
Admin Portal to allow owners of the project to 
* manage the content displayed in the app
* manage users 
* manage user posts
* send notifications to all/specific users

#### 13. Privacy Policy
The privacy policy which applies to the use of the MyDr app. User must consent to be able to use the app.

#### 14. Terms and Conditions
The terms and conditions which applies to the user of the MyDr app. User must consent to be able to use the app.

### TECHNICAL
MyDr is a **serverless** app, basically running on the Google Firebase platform.
- Database: Firebase Cloud Firestore (NOSQL)
- User Authentication: Firebase Authentication
- API: Firebase Cloud Functions using Node.js
- Web Interface: ReactJS
- Android App: Java
- Push Notifications: Firebase Cloud Messaging
- File Hosting: Firebase Hosting and Cloud Storage

* Source Control: Github (https://github.com/c2brogrammers/ProjetC2-2019)
* Project Management: Github Projects (Kanban)

### RESPONSIBILITIES
- Backend: Etienne Eid
- Admin portal: Elie Khoury and Said Eid
- Web interface: Elie Khoury and Said Eid
- Native Android app: Youssef Kassouf
