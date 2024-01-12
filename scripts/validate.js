document.addEventListener('DOMContentLoaded', function() {

    var form = document.getElementById("form");

    form.addEventListener('submit', function(event) {
        var companyWebsite = document.getElementById("company-website").value;
        var companyMessage = document.getElementById("company-website-message");
        var phoneNumber = document.getElementById("phone").value;
        var phoneMessage = document.getElementById("phone-message");
        var serviceNeeded = "service";
        var serviceMessage = document.getElementById("service-message");
        var terms = document.getElementById("terms").checked;
        var termsMessage = document.getElementById("terms-message");

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

        if (!validatePhone()) {
            event.preventDefault();
            phoneMessage.style = "color:#CD001A !important;";
            phoneMessage.innerHTML = "Phone number must be of 8,10 or more digits";
            document.getElementById('phone').focus();
        }

        function validateWebsite() {

            var dotPos = companyWebsite.indexOf('.');
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
                document.getElementById('company-website').focus();

            }
        }
        function validateServices() {
            var checked = false;
            for (var i = 1; i <= 3; i++) {
                if (document.getElementById(serviceNeeded + i).checked == true) {
                    checked = true;
                    console.log("checked");
                    break;
                }
            }
            if (checked == true || document.getElementById('service4').value != "") {
                return true;
            } else {
                return false;
            }

        }
        if (!validateServices()) {
            event.preventDefault();
            serviceMessage.innerHTML = "Please at least select one service";
            document.getElementById('service4').focus();

        }
        console.log(terms);
        if (terms != true) {
            event.preventDefault();
            termsMessage.innerHTML = "Please agree these terms and conditions before submitting the form."
            document.getElementById("terms").focus();
        }

    });
});
