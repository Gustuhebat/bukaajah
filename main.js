onload = () => {
  document.body.classList.remove("container");

  const nameText = "Heh Dirimu";
  const messageText = "Cuma Manggil✨";

  const nameElement = document.getElementById("typing-name");
  const messageElement = document.getElementById("typing-message");

  let nameIndex = 0;
  let messageIndex = 0;

  function typeWriterName() {
    if (nameIndex < nameText.length) {
      nameElement.textContent += nameText.charAt(nameIndex);
      nameIndex++;
      setTimeout(typeWriterName, 100); // kecepatan mengetik
    } else {
      setTimeout(typeWriterMessage, 500); // jeda sebelum pesan muncul
    }
  }

  function typeWriterMessage() {
    if (messageIndex < messageText.length) {
      messageElement.textContent += messageText.charAt(messageIndex);
      messageIndex++;
      setTimeout(typeWriterMessage, 80);
    }
  }

  typeWriterName();
};
