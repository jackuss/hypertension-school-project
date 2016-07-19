export default class ContactController {
    /*@ngInject*/
    constructor () {
        this.reasons = [];
        this.alerts = [];
        this.init();
    }

    init() {
        this.reasons = [
            {id: -1, label: "--Wybierz--"},
            {id: 0, label: "Współpraca"},
            {id: 1, label: "Ogólne"},
            {id: 2, label: "Sprawy techniczne"}
        ];

        this.selectedItem = this.reasons[0];
    }

    sendMessage() {
        this.alerts = [];

        if(this.selectedItem.id === -1) {
            this.alerts.push({key: 'topic', message: "Wybierz temat.", type: "danger"})
        }

        if(!this.message || this.message.length === 0) {
            this.alerts.push({key: 'message', message: "Wpisz treść wiadomości.", type: "danger"})
        }

        if(this.formIsValid()) {
            this.alerts.push({key: 'success', message: "Wiadomość została wysłana.", type: "success"})
        }
    }

    formIsValid() {
        return (this.selectedItem.id !== -1 && (this.message && this.message.length !== 0));
    }

    closeAlert(index) {
        this.alerts.splice(index, 1);
    }

}

export default ContactController;