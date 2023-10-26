document.addEventListener('DOMContentLoaded', function () {
  // the container where customer information will be displayed
  const customerContainer = document.querySelector('.profile');

  // loop through the customers array and create a card for each customer
  customers.forEach(function (customer) {
    // create a div element for the customer card
    const customerCard = document.createElement('div');
    customerCard.classList.add('customerCard');

    // create an image element and set its source
    const customerImage = document.createElement('img');
    customerImage.src = customer.picture.large;
    customerImage.classList.add('customerImage');

    const customerName = document.createElement('p');
    customerName.textContent = `${customer.name.first.charAt(0).toUpperCase() + customer.name.first.slice(1)} ${customer.name.last.charAt(0).toUpperCase() + customer.name.last.slice(1)}`;
    customerName.classList.add('customerName'); 

    const customerEmail = document.createElement('p');
    customerEmail.textContent = customer.email;
    customerEmail.classList.add('customerEmail'); 

    const customerAddress = document.createElement('p');
    customerAddress.textContent = `${customer.location.street.number} ${customer.location.street.name}`;
    customerAddress.classList.add('customerAddress'); 

    const customerAddress2 = document.createElement('p');
    customerAddress2.textContent = `${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`;
    customerAddress2.classList.add('customerAddress2'); 

    const customerDOB = document.createElement('p');
    customerDOB.textContent = `DOB: ${moment(customer.dob.date).format('MMM D, YYYY')}`;
    customerDOB.classList.add('customerDOB');

    const customerRegistered = document.createElement('p');
    customerRegistered.textContent = `Customer since: ${moment(customer.registered.date).format('MMM D, YYYY')}`;
    customerRegistered.classList.add('customerRegistered');

    // append elements to the customer card
    customerCard.appendChild(customerImage);
    customerCard.appendChild(customerName);
    customerCard.appendChild(customerEmail);
    customerCard.appendChild(customerAddress);
    customerCard.appendChild(customerAddress2);
    customerCard.appendChild(customerDOB);
    customerCard.appendChild(customerRegistered);

    // append the customer card to the container
    customerContainer.appendChild(customerCard);
  });
});
