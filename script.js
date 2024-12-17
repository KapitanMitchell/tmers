let time = 60 * 60; 

        const timerElement = document.getElementById('timer');

        const interval = setInterval(() => {
            time--;

            const minutes = Math.floor(time / 60);
            const seconds = time % 60;

            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            if (time === 30 * 60) { 
                alert("Залишилось менше половини часу!");
            }

            if (time <= 0) {
                clearInterval(interval);
                alert("Час вичерпано!");
            }
        }, 60000); 



        