
const carde = document.getElementsByClassName('card');

let count = 1;
let priseCount = 0;

for (let newcard of carde) {
    newcard.addEventListener('click', function () {
        const cardTitle = newcard.querySelector("h2").innerText;
        const prise = newcard.querySelector("span").innerText;
        const newList = document.getElementById('newlis');

        priseCount += parseFloat(prise);

        const totalPrise = document.getElementById('total-prise');
        totalPrise.innerText = priseCount.toFixed(1);

        if (priseCount > 200) {

            const inputButtons = document.getElementById('input-button');
            const inputFild = document.getElementById('input-fild');


            inputButtons.addEventListener('click', function () {
                const inputValu = inputFild.value;
                if (inputValu.toString() > 200) {
                const carentPrise = priseCount - 200;
                const discount = carentPrise * 0.2;
                const discoundPrise = document.getElementById('discount-prise');

                discoundPrise.innerText = discount.toFixed(2);

                const finalPrise = document.getElementById('final-prise');
                const newtotalPrise = priseCount - discount;
                finalPrise.innerText = newtotalPrise.toFixed(2);
                inputFild.value = "";
                }
            })



            // const carentPrise = priseCount - 200;
            // const discount = carentPrise * 0.2;
            // const discoundPrise = document.getElementById('discount-prise');

            // discoundPrise.innerText = discount.toFixed(2);

            // const finalPrise = document.getElementById('final-prise');
            // const newtotalPrise = priseCount - discount;
            // finalPrise.innerText = newtotalPrise.toFixed(2);
        }






        const li = document.createElement('li');

        li.innerText = `${count} . ${cardTitle}`;
        newList.appendChild(li);

        count++

    })
}

