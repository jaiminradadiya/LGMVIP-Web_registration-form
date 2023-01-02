import './App.css';
import Styles from './Styles/App.module.css';
import { useState, useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  const addUser = () => {
    let name = document.getElementById("NameTextbox").value;
    let email = document.getElementById("EmailTextbox").value;
    let website = document.getElementById("WebsiteTextbox").value;
    let imageLink = document.getElementById("ImageLinkTextbox").value;
    let isMale = document.getElementById("MaleRadioButton").checked;
    let isJavaChecked = document.getElementById("JavaCheckbox").checked;
    let isHTMLChecked = document.getElementById("HTMLCheckbox").checked;
    let isCSSChecked = document.getElementById("CSSCheckbox").checked;

    let newUser = {
      name: name,
      email: email,
      website: website,
      imageLink: imageLink,
      isMale: isMale,
      Skills: {
        isJavaChecked: isJavaChecked,
        isHTMLChecked: isHTMLChecked,
        isCSSChecked: isCSSChecked
      }
    }

    setUsers([...users, newUser]);

  }

  const clearUser = () => {
    document.getElementById("NameTextbox").value = "";
    document.getElementById("EmailTextbox").value = "";
    document.getElementById("WebsiteTextbox").value = "";
    document.getElementById("ImageLinkTextbox").value = "";
    document.getElementById("MaleRadioButton").checked = false;
    document.getElementById("FemaleRadioButton").checked = false;
    document.getElementById("JavaCheckbox").checked = false;
    document.getElementById("HTMLCheckbox").checked = false;
    document.getElementById("CSSCheckbox").checked = false;

  }

  return (
    <div className={Styles.mainDiv}>
        <div className={Styles.detailsDiv}>
        <p className={Styles.title} >Student Enrollment Form</p>
        <p className={Styles.nameTextbox}>Name: <input required={true} type="text" id="NameTextbox" /></p>
        <p className={Styles.emailTextbox}>Email: <input required={true} type="text" id="EmailTextbox" /></p>
        <p className={Styles.websiteTextbox}>Wesbite: <input required={true} type="text" id="WebsiteTextbox" /></p>
        <p className={Styles.imagelinkTextbox}>Image Link: <input type="text" id="ImageLinkTextbox" /></p>
        <p className={Styles.gender}>Gender: &nbsp;<input type="radio" id="MaleRadioButton" name='RadioButton' defaultChecked={true} />Male &nbsp;<input name='RadioButton' type="radio" id="FemaleRadioButton" />Female</p>
        <p className={Styles.language}>Skill: &nbsp;
          <input type="checkbox" id="JavaCheckbox" />JAVA &nbsp;
          <input type="checkbox" id="HTMLCheckbox" />HTML &nbsp;
          <input type="checkbox" id="CSSCheckbox" />CSS
        </p>

        <button className={Styles.submitButton} onClick={addUser}>Submit</button>
        <button className={Styles.clearButton} onClick={clearUser}>Clear</button>


      </div>

      <div className={Styles.usersDiv}>
        {
          users.map((user, index) => {
            return <div className={Styles.userDiv} key={index}>
            <img src={user.imageLink} className={Styles.userImage} alt="User Image" />
            <div className={Styles.userDetailsSideDiv}>
              <p className={Styles.userName}>{user.name}</p>
              <p className={Styles.userEmail}>{user.email}</p>
              <p className={Styles.userWebsite}>{user.website}</p>
              <div className={Styles.userSkillDiv}>
                <p style={{ display: user.Skills.isJavaChecked ? 'block' : 'none' }} className={Styles.userSkill} >{user.Skills.isJavaChecked ? "JAVA" : ""}</p>
                <p style={{ display: user.Skills.isHTMLChecked  ? 'block' : 'none'}} className={Styles.userSkill} >{user.Skills.isHTMLChecked ? "HTML" : ""}</p>
                <p style={{ display: user.Skills.isCSSChecked  ? 'block' : 'none'}} className={Styles.userSkill} >{user.Skills.isCSSChecked ? "CSS" : ""}</p>
              </div>
            </div>
          </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
