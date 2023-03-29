function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var phonePattern = /^\d{11}$/;
  
    if (name == "" || email == "" || phone == "" || message == "") {
      alert("Please fill out all fields.");
      return false;
    } else if (!email.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/)) {
      alert("Please enter a valid email address.");
      return false;
    } else if (!phone.match(phonePattern)) {
      alert("Please enter a 11-digit phone number.");
      return false;
    } else {
      alert("Thank you for submitting the form!");
      return true;
    }
  }
  