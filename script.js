function updateClock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const secondDeg = seconds * 6;
    
    document.getElementById('hourHand').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('secondHand').style.transform = `rotate(${secondDeg}deg)`;
    
    const digitalHours = hours.toString().padStart(2, '0');
    const digitalMinutes = minutes.toString().padStart(2, '0');
    const digitalSeconds = seconds.toString().padStart(2, '0');
    document.getElementById('digitalTime').textContent = `${digitalHours}:${digitalMinutes}:${digitalSeconds}`;
    
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    document.getElementById('date').textContent = `${year}-${month}-${day}`;
    
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    document.getElementById('weekday').textContent = weekdays[now.getDay()];
}

updateClock();
setInterval(updateClock, 1000);