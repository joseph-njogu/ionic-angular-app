 const reasonInput = document.querySelector('#learn-reason');
 const timeInput = document.querySelector('#start-time');
 const cancelBtn = document.querySelector('#btn-cancel');
 const confirmBtn = document.querySelector('#btn-confirm');
 const reasonList = document.querySelector('#reason-list');
 const totalTimeOutput = document.querySelector('#total-time');

 let timespent = 0;

 const clear = () => {
     reasonInput.value = '';
     timeInput.value = '';
 };

 confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredTime = timeInput.value;

    if(
        enteredReason.trim().length <= 0 ||
        enteredTime <= 0 ||
        enteredTime.trim().length <= 0
    ){
        function presentAlertMultipleButtons() {
            const alert = document.createElement('ion-alert');
            alert.cssClass = 'my-custom-class';
            alert.header = 'Alert';
            alert.subHeader = 'Subtitle';
            alert.message = 'This is an alert message.';
            alert.buttons = ['Cancel', 'Open Modal', 'Delete'];
          
            document.body.appendChild(alert);
            return alert.present();
          }
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': Time:' + enteredTime;

    reasonList.appendChild(newItem);

    timespent += +enteredTime;
    totalTimeOutput.textContent = timespent;

    clear();

 });

 cancelBtn.addEventListener('click', clear);