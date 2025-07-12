const chatBox = document.getElementById("chat-box");

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  input.value = "";

  // Ekansh's static AI-like response
  const response = getEkanshReply(message);
  setTimeout(() => {
    chatBox.innerHTML += `<p><strong>Ekansh:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}

function getEkanshReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hey there! How’s your day going?";
  } else if (msg.includes("how are you")) {
    return "I’m doing great! Just happy to see you 😄";
  } else if (msg.includes("bye")) {
    return "Aww, okay! Talk to you soon!";
  } else {
    return "Hmm, that’s interesting! Tell me more!";
  }
}
