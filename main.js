fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)

    data.forEach(entry => {
      const dayElement = document.querySelector(`[day="${entry.day}"]`);

      if (dayElement) {
        statHeight = entry.amount * 2.86;
        dayElement.style.height = `${statHeight}px`;
        console.log(statHeight);
      }

      const amountDisplay = document.querySelector(`[day="${entry.day}"] > .bar-tag`);

      amountDisplay.innerHTML = `$${entry.amount}`;

      console.log(amountDisplay);
    })
  })  