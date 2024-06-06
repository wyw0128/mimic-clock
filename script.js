// select hour, minute and second hand
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

const handleRotation = (hand, rotation) => {
  hand.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
};

// if mimic a clock by the time in reality

const updateClock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourIn12Hours = hours % 12 || 12;
  console.log(now, hourIn12Hours, minutes, seconds);

  handleRotation(secondHand, (360 / 60) * seconds);
  handleRotation(minuteHand, (360 / 60) * minutes);

  handleRotation(hourHand, (360 / 12) * hourIn12Hours);
};

setInterval(() => updateClock(), 1000);
