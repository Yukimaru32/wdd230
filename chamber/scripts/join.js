document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("timestamp").value = Date.now();
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("timestamp").value = Date.now();

    const benefits = {
        "np": "✅ Cost: Free<br>✅ Access to networking events<br>✅ Non-profit resources",
        "bronze": "💲 Cost: $15 per month<br>✅ Discounted training sessions<br>✅ Basic advertising opportunities",
        "silver": "💲 Cost: $30 per month<br>✅ Increased advertising visibility<br>✅ Additional training resources",
        "gold": "💲Cost: $50 per month<br>✅ Spotlight homepage feature<br>✅ Exclusive networking events<br>✅ Maximum advertising exposure"
    };

    document.getElementById("membership_level").addEventListener("change", function () {
        document.getElementById("benefit-details").innerHTML = benefits[this.value] || "Select a membership level to see the benefits.";
    });
});