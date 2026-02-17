document.addEventListener('DOMContentLoaded', () => {
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab3 = document.getElementById('tab3');
    const tab4 = document.getElementById('tab4');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');
    const content3 = document.getElementById('content3');
    const content4 = document.getElementById('content4');
    const cookiePopup = document.getElementById('cookie-consent');
    const closeBtn = document.getElementById('close-btn');
    const acceptBtn = document.getElementById('accept-btn');

    const messageArea = document.getElementById('message-area');
    const messageLength = document.getElementById('message-length');

   
    tab1.classList.add('active');
    content1.classList.add('block');
    cookiePopup.classList.add('block');

    acceptBtn.addEventListener('click', () => {
        cookiePopup.classList.remove('block');
    });

    closeBtn.addEventListener('click', () => {
        cookiePopup.classList.remove('block');
    });


    tab1.addEventListener('click', () => {
        tab1.classList.add('active');
        tab2.classList.remove('active');
        tab3.classList.remove('active');
        tab4.classList.remove('active');
        content1.classList.add('block');
        content2.classList.remove('block');
        content3.classList.remove('block');
        content4.classList.remove('block');
    });
    tab2.addEventListener('click', () => {
        tab1.classList.remove('active');
        tab2.classList.add('active');
        tab3.classList.remove('active');
        tab4.classList.remove('active');
        content1.classList.remove('block');
        content2.classList.add('block');
        content3.classList.remove('block');
        content4.classList.remove('block');
    });
    tab3.addEventListener('click', () => {
        tab1.classList.remove('active');
        tab2.classList.remove('active');
        tab3.classList.add('active');
        tab4.classList.remove('active');
        content1.classList.remove('block');
        content2.classList.remove('block');
        content3.classList.add('block');
        content4.classList.remove('block');
    }); 
    tab4.addEventListener('click', () => {
        tab1.classList.remove('active');
        tab2.classList.remove('active');
        tab3.classList.remove('active');
        tab4.classList.add('active');
        content1.classList.remove('block');
        content2.classList.remove('block');
        content3.classList.remove('block');
        content4.classList.add('block');
    });

    let message = '';
    messageArea.addEventListener('input', (event) => {
        let len = event.target.value.length;
        message = len;
        let maxlen = 250;
        messageLength.textContent = ` ${message} / ${maxlen} `;
        if(message > maxlen) {
            messageArea.classList.add('border-red-4');
            messageArea.classList.add('text-red-500');
            messageLength.classList.add('text-red-500');
        }  else {
            messageArea.classList.remove('border-red-4');
            messageArea.classList.remove('text-red-500');
            messageLength.classList.remove('text-red-500');
        }
    });
});