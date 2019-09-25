# MyDr
#### CNAM - Projet C2 2019  

### OVERVIEW
MyDr is revolutionising the local healthcare market, enabling patients to search, book and review medical specialists online. We strongly believe in the benefit of patient reviews and how they strengthen the patient-specialist relationship: empowering people to make informed decisions, as well as recognising the exceptional dedication of doctors and health specialists.


### PURPOSE
Rooted in our experience and understanding of both the personal and professional sides of healthcare, we are driven by a passionate belief that technology can greatly enhance the relationship between patients and health specialists. We strive to nurture and improve the understanding between patients and health specialists – because a better relationship can only make for better healthcare.


### SCOPE
Develop a Web-App and a Native Android-App for the customers with an Admin Portal for the project owners
having the functionalities listed in the functionality section

### FUNCTIONALITY
#### 1. User Profile
Each user will create/edit a profile where they will enter general personal information (name, age, address, phone number etc.), as well as information concerning the chosen profile type, such as a general medical history, allergies,  taken pharmaceuticals  … in a patients’ case, or specialization, working years … if the user is a doctor.

#### 2. Find a Doctor
A patient can search for a doctor depending on the sickness, living region/area and the appointment time convenience (depending on the doctor schedule). Doctors will appear based on the doctors’ location, schedule availability, rating and reviews. The patient can choose any doctor and request an appointment.

#### 3. Doctor's Profile
Accessible by all kinds of users (other doctors and patients) at any time.
it contains:
* Added and Edited by the doctor:
    * the doctor's general info
    * the doctor's professional achievements
    * the free time on the doctor's schedule
* Added and Edited by the patients:
    * the reviews and ratings
* An interactive dashboard that serves as a doctor’s scorecard to track performance and workload. It helps doctors and end users to view and visualize details of patient load and availability, demographic distribution, and important performance indicators like average wait time and patient survey results.

    
#### 4. Patient's Profile
Accessible by doctors when given access by the patient.
it contains:
* Added and Edited by the patients:
    * the patient's general info
    * info concerning the patient's medical profile (such as diseases, allergies, medicaments that he takes, ...)
* Added and Edited by the doctor but approved by the patient:
    * Info about the patient's medical condition
    * prescribed medicaments
    * reminders for treatments (such as next visits, time to take the medicine, ...)

#### 5. Treatment Report
Accessible by the doctor and the patient only.
After the appointment or any kind of contact, the doctor can write a report about the patient's case, where he can include reminders, prescriptions, ...
When the doctor submits the form the patient will receive a notification about the report.
When the patient accepts/confirm the report all the medicaments, reminders, diseases, allergies, ... will be added to his medical profile. 

#### 6. Appointments  
A doctor specifies a schedule specific for the app's patients (for example, Mondays from 9 till 11 AM and Fridays from 1 till 4 PM). A patient can select an appointment from any of the time slots specified by the doctor. When a patient requests an appointment, the doctor is notified and should accept or reject the request. In both cases, the patient recieves a notifcation regarding the doctor's decision.
The doctor specifies the default duration for his appointments and can choose whether to accept or reject appointment requests out of the specified schedule.

#### 7. Blood Request/Donation  
Any user can post a request for a blood unit by specifying the name of the person in need, the hostpital name, and the blood type. Users who have specified their blood type and enabled the blood request notification setting in their profile page, will recieve a push notification when a blood unit same as their blood type is requested. 
At anytime, users can access the Blood Donation page and see blood units requested in nearby hospitals.

#### 8. Chat  
Live Chat feature allows users to chat with healthcare providers for queries and advice on various health issues. In addition the app allow to upload photos or medical reports to enable the healthcare professionals to better understand any of the health conditions.

#### 9. General Info  
A page that shows some general information, important phone numbers, and useful tips, for example: Emergency hotlines, Hospital numbers, ...

#### 10. Settings

#### 11. Admin Portal

#### 12. Privacy Policy

#### 13. Terms and Conditions

### TECHNICAL
MyDr is a serverless app, basically running on the Google Firebase platform.
- Database: Firebase Cloud Firestore (NOSQL)
- User Authenticatio: Firebase Authentication
- API: Firebase Cloud Functions using Node.js
- Web Interface: ReactJs
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