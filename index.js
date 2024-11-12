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
  const data = {
    name,
    email,
    subject,
    message,
  };
  console.log(data);
  const res = await axios({ method: "post", url: "https://kartikey-api.vercel.app/api/mail", data: data, headers: { "Content-Type": 'application/x-www-form-urlencoded'}});
  const result = res.data;
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