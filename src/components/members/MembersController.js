class MembersController {
    /*@ngInject*/
    constructor (ModalService, MembersService) {
        this.modalService = ModalService;
        this.memberService = MembersService;
        this.members = [];
        this.init();
    }


    init() {
        this.memberService.getMembers().then(data => {
            this.members = data;
        });
    }

    showDetailsInModal(data) {
        this.modalService.setData(data);
        this.modalService.openModal('/components/members/modals/memberModalTemplate.html', 'MemberModalController', 'sm', 'lkfs-members-modal');
    }
}

export default MembersController;