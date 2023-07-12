document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var feedback = document.getElementById("feedback").value;
    
    // Do something with the form data, like sending it to a server
    // Here, we'll just log the data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log("Feedback: " + feedback);
    
    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "male";
    document.getElementById("feedback").value = "";
  });
  