(function () {
    const passwordChanger = {
        passwordInputElement: document.getElementById('password'),
        btnElement: document.querySelector('.showPass'),
        init() {
            document.documentElement.classList.add('js-enabled');
            this.addEventListeners();
        },
        addEventListeners() {
            this.btnElement.addEventListener('click', () => {
                this.switchInputType();
            });
        },
        switchInputType() {
            this.passwordInputElement.type === 'password' ? this.passwordInputElement.type = 'text' : this.passwordInputElement.type = 'password';
        }
    }
    passwordChanger.init();
})()