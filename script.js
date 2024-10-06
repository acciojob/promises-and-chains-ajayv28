//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const age = parseInt(document.getElementById('age').value);
    const name = document.getElementById('name').value;


    if (!age || !name) {
        alert("Both fields are required!");
        return;
    }


    const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    // Handle the promise
    agePromise
        .then((message) => {
            alert(message);
        })
        .catch((errorMessage) => {
            alert(errorMessage);
        });
});