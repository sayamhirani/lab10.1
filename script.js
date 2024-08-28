// Initial contacts data
let contacts = [
  { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
  { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
  { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" },
];

// Function to display contacts with a callback
const displayContacts = (callback) => {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = ""; // Clear the current list

  contacts.forEach((contact) => {
    const contactItem = document.createElement("p");
    contactItem.textContent = `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`;
    contactList.appendChild(contactItem);
  });

  if (callback) {
    callback();
  }
};

// Function to update contacts
const updateContacts = () => {
  setTimeout(() => {
    displayContacts(() => {
      document.getElementById("statusMessage").textContent =
        "Contacts updated!";
    });
  }, 1000); // Simulating delay
};

// Function to add a new contact
const addNewContact = () => {
  do {
    const name = prompt("Enter contact name:");
    const phone = prompt("Enter contact phone:");
    const email = prompt("Enter contact email:");

    if (name && phone && email) {
      contacts.push({ name, phone, email });
      displayContacts();
      document.getElementById("statusMessage").textContent =
        "New contact added!";
    } else {
      document.getElementById("statusMessage").textContent =
        "Invalid input. Please try again.";
    }
  } while (confirm("Would you like to add another contact?"));
};

// Recursive function to find a contact by name
const findContactByName = () => {
  const name = prompt("Enter the name of the contact to find:");

  const searchContact = (name, contacts, index = 0) => {
    if (index >= contacts.length) return null;
    return contacts[index].name.toLowerCase() === name.toLowerCase()
      ? contacts[index]
      : searchContact(name, contacts, index + 1);
  };

  const contact = searchContact(name, contacts);
  if (contact) {
    alert(
      `Found: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
    );
  } else {
    alert("Contact not found.");
  }
};

// Change the background color every 5 seconds
const changeBackgroundColor = () => {
  const colors = ["#d8bfd8", "#e6e6fa", "#dda0dd", "#ee82ee", "#da70d6"];
  let index = 0;
  setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 5000);
};

// Log the number of contacts to the console every 10 seconds
setInterval(() => {
  console.log(`Total contacts: ${contacts.length}`);
}, 10000);

// Event listeners for buttons
document
  .getElementById("updateContactsBtn")
  .addEventListener("click", updateContacts);
document
  .getElementById("addContactBtn")
  .addEventListener("click", addNewContact);
document
  .getElementById("findContactBtn")
  .addEventListener("click", findContactByName);

// Initial setup
displayContacts();
changeBackgroundColor();
