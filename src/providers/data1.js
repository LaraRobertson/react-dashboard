/**
 * Created by lara on 6/5/2021.
 * fake data plus gets email from local storage - email was stored during login
 *
 */

const data1 = {
    profile: [
        { id: 0, email: "blank@blank.com", name: "Test Email"}
    ]
}
console.log("email in data1.js", data1.profile[0].email);
data1.profile[0].email = localStorage.getItem('Email');
export default data1
