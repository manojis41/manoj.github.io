document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    var companyWebsite = document.getElementById("company-website").value;
    var companyMessage = document.getElementById("company-website-message");
    var phoneNumber = document.getElementById("phone").value;
    var phoneMessage = document.getElementById("phone-message");
    var serviceNeeded = "service";
    var serviceMessage = document.getElementById("service-message");
    var terms = document.getElementById("terms").checked;
    var termsMessage = document.getElementById("terms-message");
    var submitError = document.getElementById("submit-error");

    function reset() {
      phoneMessage.innerHTML = "";
      companyMessage.innerHTML = "";
      serviceMessage.innerHTML = "";
      termsMessage.innerHTML = "";
    }
    reset();

    function validatePhone() {
      if (phoneNumber.length >= 8 && phoneNumber.length >= 10) {
        return true;
      } else {
        return false;
      }
    }

    function validateWebsite() {
      var dotPos = companyWebsite.indexOf(".");
      var indexOfLast = companyWebsite.length - 1;
      if (dotPos > -1 && dotPos != 1 && dotPos != indexOfLast) {
        return true;
      } else {
        return false;
      }
    }
    if (companyWebsite != "") {
      if (!validateWebsite()) {
        event.preventDefault();
        companyMessage.innerHTML = "Please Enter correct website.";
        document.getElementById("company-website").focus();
      }
    }

    function validateServices() {
      var checked = false;
      for (var i = 1; i <= 3; i++) {
        if (document.getElementById(serviceNeeded + i).checked == true) {
          checked = true;
          break;
        }
      }
      if (checked == true || document.getElementById("service4").value != "") {
        return true;
      } else {
        return false;
      }
    }
    function generateCard() {
      if (submitError.innerHTML == "") {
        var cardContainer = document.createElement("div");
        cardContainer.id = "error-card";
        var harvardLogo = document.createElement("img");
        harvardLogo.src = "https://duckduckgo.com/i/30cb9640.png";
        harvardLogo.alt = "Harvard Logo";
        harvardLogo.id = "h-logo";

        var heading = document.createElement("h1");
        heading.textContent = "Harvard CS50x Project Form only";

        var paragraph = document.createElement("p");
        paragraph.textContent =
          "This frontend form is for a CS50x pset and is not intended for submissions. For contact, kindly use alternative methods. Thank you for your understanding!";

        cardContainer.appendChild(harvardLogo);
        cardContainer.appendChild(heading);
        cardContainer.appendChild(paragraph);

        document.body.appendChild(cardContainer);
        submitError.appendChild(cardContainer);
      } else {
        return;
      }
    }
    if (!validatePhone()) {
      event.preventDefault();
      phoneMessage.style = "color:#CD001A !important;";
      phoneMessage.innerHTML = "Phone number must be of 8,10 or more digits";
      document.getElementById("phone").focus();
    }
    if (!validateServices()) {
      event.preventDefault();
      serviceMessage.innerHTML = "Please at least select one service";
      document.getElementById("service4").focus();
    }
    if (terms != true) {
      event.preventDefault();
      termsMessage.innerHTML =
        "Please agree these terms and conditions before submitting the form.";
      document.getElementById("terms").focus();
    } else {
      event.preventDefault();
      generateCard();
      submitError.focus();
    }
  });
});
