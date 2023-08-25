function FullName() {
    let fullName = document.getElementById("FullName").value;
    let nameBoxFullName = document.getElementById("name-box-fullname");
    nameBoxFullName.innerText = fullName;
 }
 function Title() {
    let title = document.getElementById("title").value;
    let titleBoxFullName = document.getElementById("name-box-title");
    titleBoxFullName.innerText = title;
 }
 function Phone() {
    let phone = document.getElementById("phone").value;
    let phoneLi = document.getElementById("phone-li");
    phoneLi.innerText = phone;
 }
 function Email() {
    let email = document.getElementById("email").value;
    let emailLi = document.getElementById("mail-li");
    emailLi.innerText = email;
 }
 function Web() {
    let web = document.getElementById("web").value;
    let webLi = document.getElementById("web-li");
    webLi.innerText = web;
 }
 function Address() {
    let address = document.getElementById("address").value;
    let addressLi = document.getElementById("address-li");
    addressLi.innerText = address;
 }
 function EducationExplanation() {
    let explanationEdu = document.getElementById("ExplanationEdu").value;
    let educationExplanation = document.getElementById("educationExplanation");
    educationExplanation.textContent = explanationEdu;
 }
 function AboutMeExplanation() {
     let explanationAboutMe = document.getElementById("aboutMeExplanation").value;
     let aboutMeExplanation = document.getElementById("aboutMe");
     aboutMeExplanation.innerHTML = explanationAboutMe;
 }
 function WorkExperience() {
     let workExperienceExplanation = document.getElementById("WorkExperienceExplanation").value;
     let workExperience = document.getElementById("workExperience");
     workExperience.innerHTML = workExperienceExplanation;
 }
 function FirstSchoolName() {
    let firstSchoolName = document.getElementById("FirstSchoolName").value;
    let educationFirstChildLi = document.getElementById("educationFirstChildLi");
    educationFirstChildLi.innerHTML = `
     ${firstSchoolName}
         <ul id="educationChildUl">
             <li id="educationSecondChildLi"></li>
         </ul>
     `;
 }
 function FirstSchoolExplanation() {
     let firstSchoolExplanation = document.getElementById("FirstSchoolExplanation").value;
     let educationSecondChildLi = document.getElementById("educationSecondChildLi");

     educationSecondChildLi.textContent = firstSchoolExplanation;
 }
 function SecondSchoolName() {
    let secondSchoolName = document.getElementById("SecondSchoolName").value;
    let educationThirdChildLi = document.getElementById("educationThirdChildLi");
    educationThirdChildLi.innerHTML = `
     ${secondSchoolName}
         <ul id="educationSecondChildUl">
             <li id="educationFourthChildLi"></li>
         </ul>
     `;
 }
 function SecondSchoolExplanation() {
     let secondSchoolExplanation = document.getElementById("SecondSchoolExplanation").value;
     let educationFourthChildLi = document.getElementById("educationFourthChildLi");

     educationFourthChildLi.textContent = secondSchoolExplanation;
 }
 function ThirdSchoolName() {
    let thirdSchoolName = document.getElementById("ThirdSchoolName").value;
    let educationFifthChildLi = document.getElementById("educationFifthChildLi");
    educationFifthChildLi.innerHTML = `
     ${thirdSchoolName}
         <ul id="educationThirdChildUl">
             <li id="educationSixthChildLi"></li>
         </ul>
     `;
 }
 function ThirdSchoolExplanation() {
     let thirdSchoolExplanation = document.getElementById("ThirdSchoolExplanation").value;
     let educationSixthChildLi = document.getElementById("educationSixthChildLi");

     educationSixthChildLi.textContent = thirdSchoolExplanation;
 }
 function SchoolCountSelect(){
     let firstSchoolCount = document.getElementById("FirstSchoolCount");
     let firstSchoolName = document.getElementById("FirstSchoolName");
     let firstSchoolExplanation = document.getElementById("FirstSchoolExplanation");

     let secondSchoolCount = document.getElementById("SecondSchoolCount");
     let secondSchoolName = document.getElementById("SecondSchoolName");
     let secondSchoolExplanation = document.getElementById("SecondSchoolExplanation");

     let thirdSchoolCount = document.getElementById("ThirdSchoolCount");
     let thirdSchoolName = document.getElementById("ThirdSchoolName");
     let thirdSchoolExplanation = document.getElementById("ThirdSchoolExplanation");

     let educationParentUl = document.getElementById("educationParentUl");
     let educationFirstChildLi = document.getElementById("educationFirstChildLi");
     let educationThirdChildLi = document.getElementById("educationThirdChildLi");
     let educationFifthChildLi = document.getElementById("educationFifthChildLi");

     let schoolCountSelect = document.getElementById("SchoolCount").value;

     if (schoolCountSelect === "1") {
         firstSchoolCount.classList.remove("display-none");
         firstSchoolName.classList.remove("display-none");
         firstSchoolExplanation.classList.remove("display-none");

         educationParentUl.classList.remove("display-none");
         educationFirstChildLi.classList.remove("display-none");

         secondSchoolCount.classList.add("display-none");
         secondSchoolName.classList.add("display-none");
         secondSchoolExplanation.classList.add("display-none");
         educationThirdChildLi.classList.add("display-none");

          thirdSchoolCount.classList.add("display-none");
          thirdSchoolName.classList.add("display-none");
          thirdSchoolExplanation.classList.add("display-none");
          educationFifthChildLi.classList.add("display-none");

     } else if (schoolCountSelect === "2") {
         firstSchoolCount.classList.remove("display-none");
         firstSchoolName.classList.remove("display-none");
         firstSchoolExplanation.classList.remove("display-none");

         secondSchoolCount.classList.remove("display-none");
         secondSchoolName.classList.remove("display-none");
         secondSchoolExplanation.classList.remove("display-none");

         educationParentUl.classList.remove("display-none");
         educationFirstChildLi.classList.remove("display-none");
         educationThirdChildLi.classList.remove("display-none");


          thirdSchoolCount.classList.add("display-none");
          thirdSchoolName.classList.add("display-none");
          thirdSchoolExplanation.classList.add("display-none");
          educationFifthChildLi.classList.add("display-none");

     }
     else if (schoolCountSelect === "3") {
         firstSchoolCount.classList.remove("display-none");
         firstSchoolName.classList.remove("display-none");
         firstSchoolExplanation.classList.remove("display-none");

         secondSchoolCount.classList.remove("display-none");
         secondSchoolName.classList.remove("display-none");
         secondSchoolExplanation.classList.remove("display-none");

         thirdSchoolCount.classList.remove("display-none");
         thirdSchoolName.classList.remove("display-none");
         thirdSchoolExplanation.classList.remove("display-none");

         educationParentUl.classList.remove("display-none");
         educationFirstChildLi.classList.remove("display-none");
         educationThirdChildLi.classList.remove("display-none");
         educationFifthChildLi.classList.remove("display-none");

     } else {
         firstSchoolCount.classList.add("display-none");
         firstSchoolName.classList.add("display-none");
         firstSchoolExplanation.classList.add("display-none");

         secondSchoolCount.classList.add("display-none");
         secondSchoolName.classList.add("display-none");
         secondSchoolExplanation.classList.add("display-none");

         thirdSchoolCount.classList.add("display-none");
         thirdSchoolName.classList.add("display-none");
         thirdSchoolExplanation.classList.add("display-none");

         educationParentUl.classList.add("display-none");
         educationFirstChildLi.classList.add("display-none");
         educationThirdChildLi.classList.add("display-none");
         educationFifthChildLi.classList.add("display-none");
     }
 }

 function SkillExplanation() {
    let explanationSkills = document.getElementById("ExplanationSkills").value;
    let skillExplanation = document.getElementById("skillExplanation");
    skillExplanation.textContent = explanationSkills;
 }
 function FirstSkillName() {
    let firstSkillName = document.getElementById("FirstSkillName").value;
    let skillFirstChildLi = document.getElementById("skillFirstChildLi");
    skillFirstChildLi.innerHTML = `
     ${firstSkillName}
         <ul id="skillChildUl">
             <li id="skillSecondChildLi"></li>
         </ul>
     `;
 }
 function FirstSkillExplanation() {
     let firstSkillExplanation = document.getElementById("FirstSkillExplanation").value;
     let skillSecondChildLi = document.getElementById("skillSecondChildLi");

     skillSecondChildLi.textContent = firstSkillExplanation;
 }
 function SecondSkillName() {
    let secondSkillName = document.getElementById("SecondSkillName").value;
    let skillThirdChildLi = document.getElementById("skillThirdChildLi");
    skillThirdChildLi.innerHTML = `
     ${secondSkillName}
         <ul id="skillSecondChildUl">
             <li id="skillFourthChildLi"></li>
         </ul>
     `;
 }
 function SecondSkillExplanation() {
     let secondSkillExplanation = document.getElementById("SecondSkillExplanation").value;
     let skillFourthChildLi = document.getElementById("skillFourthChildLi");

     skillFourthChildLi.textContent = secondSkillExplanation;
 }
 function ThirdSkillName() {
    let thirdSkillName = document.getElementById("ThirdSkillName").value;
    let skillFifthChildLi = document.getElementById("skillFifthChildLi");
    skillFifthChildLi.innerHTML = `
     ${thirdSkillName}
         <ul id="skillThirdChildUl">
             <li id="skillSixthChildLi"></li>
         </ul>
     `;
 }
 function ThirdSkillExplanation() {
     let thirdSkillExplanation = document.getElementById("ThirdSkillExplanation").value;
     let skillSixthChildLi = document.getElementById("skillSixthChildLi");

     skillSixthChildLi.textContent = thirdSkillExplanation;
 }
 function SkillCountSelect(){
     let firstSkillCount = document.getElementById("FirstSkillCount");
     let firstSkillName = document.getElementById("FirstSkillName");
     let firstSkillExplanation = document.getElementById("FirstSkillExplanation");

     let secondSkillCount = document.getElementById("SecondSkillCount");
     let secondSkillName = document.getElementById("SecondSkillName");
     let secondSkillExplanation = document.getElementById("SecondSkillExplanation");

     let thirdSkillCount = document.getElementById("ThirdSkillCount");
     let thirdSkillName = document.getElementById("ThirdSkillName");
     let thirdSkillExplanation = document.getElementById("ThirdSkillExplanation");

     let skillParentUl = document.getElementById("skillParentUl");
     let skillFirstChildLi = document.getElementById("skillFirstChildLi");
     let skillThirdChildLi = document.getElementById("skillThirdChildLi");
     let skillFifthChildLi = document.getElementById("skillFifthChildLi");

     let skillCountSelect = document.getElementById("SkillCount").value;

     if (skillCountSelect === "1") {
         firstSkillCount.classList.remove("display-none");
         firstSkillName.classList.remove("display-none");
         firstSkillExplanation.classList.remove("display-none");

         skillParentUl.classList.remove("display-none");
         skillFirstChildLi.classList.remove("display-none");

         secondSkillCount.classList.add("display-none");
         secondSkillName.classList.add("display-none");
         secondSkillExplanation.classList.add("display-none");
         skillThirdChildLi.classList.add("display-none");

         thirdSkillCount.classList.add("display-none");
         thirdSkillName.classList.add("display-none");
         thirdSkillExplanation.classList.add("display-none");
         skillFifthChildLi.classList.add("display-none");

     } else if (skillCountSelect === "2") {
         firstSkillCount.classList.remove("display-none");
         firstSkillName.classList.remove("display-none");
         firstSkillExplanation.classList.remove("display-none");

         secondSkillCount.classList.remove("display-none");
         secondSkillName.classList.remove("display-none");
         secondSkillExplanation.classList.remove("display-none");

         skillParentUl.classList.remove("display-none");
         skillFirstChildLi.classList.remove("display-none");
         skillThirdChildLi.classList.remove("display-none");


          thirdSkillCount.classList.add("display-none");
          thirdSkillName.classList.add("display-none");
          thirdSkillExplanation.classList.add("display-none");
          skillFifthChildLi.classList.add("display-none");

     }
     else if (skillCountSelect === "3") {
         firstSkillCount.classList.remove("display-none");
         firstSkillName.classList.remove("display-none");
         firstSkillExplanation.classList.remove("display-none");

         secondSkillCount.classList.remove("display-none");
         secondSkillName.classList.remove("display-none");
         secondSkillExplanation.classList.remove("display-none");

         thirdSkillCount.classList.remove("display-none");
         thirdSkillName.classList.remove("display-none");
         thirdSkillExplanation.classList.remove("display-none");

         skillParentUl.classList.remove("display-none");
         skillFirstChildLi.classList.remove("display-none");
         skillThirdChildLi.classList.remove("display-none");
         skillFifthChildLi.classList.remove("display-none");

     } else {
         firstSkillCount.classList.add("display-none");
         firstSkillName.classList.add("display-none");
         firstSkillExplanation.classList.add("display-none");

         secondSkillCount.classList.add("display-none");
         secondSkillName.classList.add("display-none");
         secondSkillExplanation.classList.add("display-none");

         thirdSkillCount.classList.add("display-none");
         thirdSkillName.classList.add("display-none");
         thirdSkillExplanation.classList.add("display-none");

         skillParentUl.classList.add("display-none");
         skillFirstChildLi.classList.add("display-none");
         skillThirdChildLi.classList.add("display-none");
         skillFifthChildLi.classList.add("display-none");
     }
 }
 function CvBackgroundColor() {
     let cvBackgroundColor = document.getElementById("backgroundcolor").value;
     let cvBackground = document.querySelector(".cv-container");
     cvBackground.style.backgroundColor = cvBackgroundColor;
 }
 function LeftSideBackgroundColor() {
     let leftSideBackgroundColor = document.getElementById("leftcolumncolor").value;
     let leftSide = document.querySelector(".cv-left-side");
     leftSide.style.backgroundColor = leftSideBackgroundColor;
 }
 function NameBoxColor() {
     let nameBoxBackgroundColor = document.getElementById("nameboxcolor").value;
     let nameBox = document.querySelector(".name-box");
     nameBox.style.backgroundColor = nameBoxBackgroundColor;
 }
 function NameBoxTextColor() {
     let nameBoxTextColor = document.getElementById("nameboxtextcolor").value;
     let nameBoxText = document.querySelector(".name-box");
     let nameTitleLine = document.querySelector(".name-title-line");

     nameBoxText.style.color = nameBoxTextColor;
     nameTitleLine.style.color = nameBoxTextColor;
 }
 function ChangeFontFamily() {
     let selectedValue = document.getElementById("textType").value;
     let fontFamily;

     if(selectedValue === "1") {
         fontFamily = "'Times New Roman', Times, serif";
     }
     else if (selectedValue === "2") {
         fontFamily = "'Courier New', Courier, monospace";
     }
     else if (selectedValue === "3") {
         fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
     }
     else {
         fontFamily = "";
     }

         let cvBodyText = document.querySelector(".cv-container");
         cvBodyText.style.fontFamily = fontFamily;   
 }

 function ChangePhotoFrameShape() {
     let selectedValue = document.getElementById("photoframeshape").value;
     let photoFrameShape = document.querySelector(".profile-photo");

     if (selectedValue === "1") {
         photoFrameShape.style.border = "1px solid #000";
         photoFrameShape.style.borderRadius = "0";
     } else if (selectedValue === "2") {
         photoFrameShape.style.border = "1px solid #000";
         photoFrameShape.style.borderRadius = "40px";
     } else if (selectedValue === "3") {
         photoFrameShape.style.border = "1px solid #000";
         photoFrameShape.style.borderRadius = "50%";
     } else {
         photoFrameShape.style.border = "1px solid #000";
         photoFrameShape.style.borderRadius = "50%";
     }
 }
 function BelowTitleLines() {
     let nameBoxLineColor = document.getElementById("nameboxlinecolor").value;
     let lineElements = document.querySelectorAll(".cv-header-line");

     lineElements.forEach(line => {
         line.style.borderColor = nameBoxLineColor;
     });
 }
 function LineShape() {
     let selectedValue = document.getElementById("lineshape").value;
     let lineShapes = document.querySelectorAll(".cv-header-line");

     lineShapes.forEach(line => {
         if (selectedValue === "1") {
             line.style.borderStyle = "dotted";
         } else if (selectedValue === "2") {
             line.style.borderStyle = "dashed";
         } else if (selectedValue === "3") {
             line.style.borderStyle = "solid";
         } else {
             line.style.borderStyle = "solid";
         }
     });
 }


