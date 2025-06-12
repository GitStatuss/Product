const counter = document.getElementById("counter")

let count = 0;

    function addProduct() {
      count++;
      console.log("Cart count:", count);
      counter.innerHTML = count;
    }

    function removeProduct() {
      count--;
      console.log("Cart count:", count);
        if(0 > count){
            count++;
        }
              counter.innerHTML = count;

    }

    document.getElementById("butty") = addProduct;
    document.getElementById("buttson") = removeProduct;
    

    console.log(count);






document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');

    function loadMoreContent() {
        for (let i = 0; i < 5; i++) {
            const newDiv = document.createElement('div');
            newDiv.textContent = 'New content block';
            newDiv.classList.add('item');
            content.appendChild(newDiv);
        }
    }

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            loadMoreContent();
        }
    });


    loadMoreContent();
});

console.log('test test test');
