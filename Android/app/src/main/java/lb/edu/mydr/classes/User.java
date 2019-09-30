package lb.edu.mydr.classes;

import java.util.Date;

public class User {
    private int ID;
    private String FullName;
    private String Email;
    private String UID;
    private Date LastSignIn;
    private Date CreationDate;

    public User() {
        super();
    }

    public User(String fullName, String email, String uID) {
        this.FullName = fullName;
        this.Email = email;
        this.UID = uID;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getFullName() {
        return FullName;
    }

    public void setFullName(String fullName) {
        FullName = fullName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public Date getLastSignIn() {
        return LastSignIn;
    }

    public void setLastSignIn(Date lastSignIn) {
        LastSignIn = lastSignIn;
    }

    public Date getCreationDate() {
        return CreationDate;
    }

    public void setCreationDate(Date creationDate) {
        CreationDate = creationDate;
    }

    public String getUID() {
        return UID;
    }

    public void setUID(String UID) {
        this.UID = UID;
    }
}
