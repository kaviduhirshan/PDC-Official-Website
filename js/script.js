const form = document.getElementById("feedbackForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  status.textContent = "Sending...";

  const data = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  };

  const response = await fetch("http://localhost:3000/send-feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    status.textContent = "✅ Message sent successfully!";
    form.reset();
  } else {
    status.textContent = "❌ Failed to send message.";
  }
});
