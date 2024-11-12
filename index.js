var typed = new Typed(".text", {
  strings: ["Frontend developer", "2nd year undergrad", "Web Developer"],
  typeSpeed: 100,
  backspeed: 100,
  backDelay: 1000,
  loop: true,
});

const handleSubmit = async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  console.log(name, email, subject, message);
  const data = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };
  const res = await fetch("https://kartikey-api.vercel.app/api/mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  console.log(result);
  if (result.status === "success") {
    alert("Message Sent");
  } else {
    alert("Message failed to send");
  }
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
};

document.getElementById("form").onsubmit = handleSubmit;