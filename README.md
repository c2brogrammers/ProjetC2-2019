# MyDr
#### CNAM - Projet C2 2019  

### OVERVIEW


### PURPOSE


### SCOPE


### FUNCTIONALITY
#### 1. User Profile  

#### 2. Find a Doctor

#### 3. Doctor's Profile

#### 4. Patient's Profile

#### 5. Treatment

#### 6. Appointments  
A doctor specifies a schedule specific for the app's patients (for example, Mondays from 9 till 11 AM and Fridays from 1 till 4 PM). A patient can select an appointment from any of the time slots specified by the doctor. When a patient requests an appointment, the doctor is notified and should accept or reject the request. In both cases, the patient recieves a notifcation regarding the doctor's decision.
The doctor specifies the default duration for his appointments and can choose whether to accept or reject appointment requests out of the specified schedule.

#### 7. Blood Request/Donation  
Any user can post a request for a blood unit by specifying the name of the person in need, the hostpital name, and the blood type. Users who have specified their blood type and enabled the blood request notification setting in their profile page, will recieve a push notification when a blood unit same as their blood type is requested. 
At anytime, users can access the Blood Donation page and see blood units requested in nearby hospitals.

#### 8. Chat

#### 9. General Info  
A page that shows some general information, important phone numbers, and useful tips, for example: Emergency hotlines, Hospital numbers, ...

#### 10. Settings

#### 11. Admin Portal

#### 12. Privacy Policy

#### 13. Terms and Conditions

### TECHNICAL
MyDr is a serverless app basically running on the Google Firebase platform.
- Database: Firebase Cloud Firestore (NOSQL)
- User Authenticatio: Firebase Authentication
- API: Firebase Cloud Functions using Node.js
- Web Interface: Semantic UI React
- Android App: Java
- Push Notifications: Firebase Cloud Messaging
- File Hosting: Firebase Cloud Hosting

* Source Control: Github (https://github.com/c2brogrammers/ProjetC2-2019)
* Project Management: Zoho Projects

### RESPONSIBILITIES
- Backend: Etienne Eid
- Admin portal: Elie Khoury and Said Eid
- Web interface: Elie Khoury and Said Eid
- Native Android app: Youssef Kassouf