(function () {
    const customerImage = document.querySelector("#image-card");
    const customerName = document.querySelector("#customer-name");
    const customerText = document.querySelector("#customer-text");

    const btn = document.querySelectorAll(".btn"); // Select all elements with class ".btn"
    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let Img = `./image/${img}.jpg`;
        let customer = new Customer(Img, name, text);
        customers.push(customer);
    }

    createCustomer(1, 'John', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate a officiis quasi reprehenderit illo ipsum minima maxime optio at ducimus!');
    createCustomer(2, 'Amilie', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate a officiis quasi reprehenderit illo ipsum minima maxime optio at ducimus!');
    createCustomer(3, 'Meera', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate a officiis quasi reprehenderit illo ipsum minima maxime optio at ducimus!');
    createCustomer(4, 'Tyrelle', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate a officiis quasi reprehenderit illo ipsum minima maxime optio at ducimus!');

    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevbtn')) { // remove the dot (.) before prevbtn and nextbtn
                if (index === 0) {
                    index = customers.length;
                }
                index--;
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name; // use textContent instead of src for setting the text
                customerText.textContent = customers[index].text; // use textContent instead of src for setting the text
            }

            if (e.target.parentElement.classList.contains('nextbtn')) { // remove the dot (.) before prevbtn and nextbtn
                index++;
                if (index === customers.length) {
                    index = 0;
                }
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name; // use textContent instead of src for setting the text
                customerText.textContent = customers[index].text; // use textContent instead of src for setting the text
            }
        });
    });
})();
