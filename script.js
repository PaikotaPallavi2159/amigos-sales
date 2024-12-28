<script>
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from reloading the page

            // Get values from the form
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const state = document.getElementById('state').value;
            const country = document.getElementById('country').value;
            const pin = document.getElementById('pin').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation (checking if all fields are filled)
            if (name && phone && state && country && pin && email && message) {
                // Log the form data to the console
                console.log('Form submitted with data:', {
                    Name: name,
                    Phone: phone,
                    State: state,
                    Country: country,
                    PinCode: pin,
                    Email: email,
                    Message: message
                });

                // Optionally, you can clear the form after submission
                document.getElementById('contactForm').reset();
                alert("Form submitted successfully!");
            } else {
                alert('Please fill in all the fields!');
            }
        });
    </script>
