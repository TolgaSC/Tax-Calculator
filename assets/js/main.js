function calculateTax() {

    let amount = document.querySelector("form input[type='number']").value;
    let taxAmount = document.getElementById("betragineuro");
    let endAmount = document.getElementById("endBetrag");

    if (document.getElementById("nettobrutto").checked && document.getElementById("nineteenpercent").checked) {
        document.getElementById("betragOhneMwSt").innerHTML = "Nettobetrag in Euro<span>*</span>";
        document.getElementById("changedtext2").innerHTML = "Bruttobetrag (Endpreis)";
        taxAmount.innerHTML = (amount * 19 / 100).toFixed(2) + " €";
        endAmount.innerHTML = (amount * 1.19).toFixed(2) + " €";

    } else if (document.getElementById("nettobrutto").checked && document.getElementById("sevenpercent").checked) {
        document.getElementById("betragOhneMwSt").innerHTML = "Nettobetrag in Euro<span>*</span>";
        document.getElementById("changedtext2").innerHTML = "Bruttobetrag (Endpreis)";
        taxAmount.innerHTML = (amount * 7 / 100).toFixed(2) + " €";
        endAmount.innerHTML = (amount * 1.07).toFixed(2) + " €";

    } else if (document.getElementById("bruttonetto").checked && document.getElementById("nineteenpercent").checked) {
        document.getElementById("betragOhneMwSt").innerHTML = "Bruttobetrag in Euro<span>*</span>";
        document.getElementById("changedtext2").innerHTML = "Nettobetrag";
        taxAmount.innerHTML = (amount - (amount / 1.19)).toFixed(2) + " €";
        endAmount.innerHTML = (amount / 1.19).toFixed(2) + " €";

    } else if (document.getElementById("bruttonetto").checked && document.getElementById("sevenpercent")) {
        document.getElementById("betragOhneMwSt").innerHTML = "Bruttobetrag in Euro<span>*</span>";
        document.getElementById("changedtext2").innerHTML = "Nettobetrag";
        taxAmount.innerHTML = (amount - (amount / 1.07)).toFixed(2) + " €";
        endAmount.innerHTML = (amount / 1.07).toFixed(2) + " €"
    }
}


