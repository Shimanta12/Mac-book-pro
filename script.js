const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');
const total = document.getElementById('total');
const discountTotal = document.getElementById('discount-total');

// updating Extra memory cost
function updateMemoryCost(memory) {
    if (memory == '8GB') {
        memoryCost.innerText = '0';
    } else if (memory == '16GB') {
        memoryCost.innerText = '100'
    }
    updateTotal();
}
// updating Extra storage cost
function updateStorageCost(storage) {
    if (storage == '256GB') {
        storageCost.innerText = '0';
    } else if (storage == '512GB') {
        storageCost.innerText = '100';
    } else if (storage == '1TB') {
        storageCost.innerText = '180';
    }
    updateTotal();
}
// updating Extra delivery Cost
function updateDeliveryCost(charge) {
    if (charge == 'freePrime') {
        deliveryCharge.innerText = '0';
    } else if (charge == 'withDeliveryCost') {
        deliveryCharge.innerText = '20';
    }
    updateTotal();
}
// updating total price
function updateTotal() {
    const bestPriceAmount = parseInt(document.getElementById('best-price').innerText);
    const totalCost = parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCharge.innerText);
    total.innerText = bestPriceAmount + totalCost;
    updatingDiscountTotal(bestPriceAmount, totalCost);
}
// updating total discount price
function updatingDiscountTotal(bestPriceAmount, totalCost) {
    discountTotal.innerText = bestPriceAmount + totalCost;
}
// promo code confirmation
document.getElementById('promo-input').addEventListener('keyup', function (event) {
    const promoButton = document.getElementById('promo-button');
    if (event.target.value == 'stevekaku') {
        promoButton.removeAttribute('disabled');
    }
    else {
        promoButton.setAttribute('disabled', true);
    }
});
document.getElementById('promo-input').addEventListener('change', function (event) {
    console.log(event.target.value);
    const promoButton = document.getElementById('promo-button');
    if (event.target.value == 'stevekaku') {
        promoButton.removeAttribute('disabled');
    }
    else {
        promoButton.setAttribute('disabled', true);
    }
});

// promo code discount
function promoDiscount() {
    const totalAmount = parseInt(total.innerText);
    const promoDiscount = totalAmount * 20 / 100;
    const totalWithPromoDiscount = totalAmount - promoDiscount;
    discountTotal.innerText = totalWithPromoDiscount;
}