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
            this.members = angular.copy(data);

            for (var i = 0; i < this.members.length; i++) {
                this.members[i].achievements = [];
                this.memberService.getAchievements(this.members[i].id, i).then(achievements => {
                    this.members[achievements.index].achievements = achievements.data;
                });
            }
        });
    }

    showDetailsInModal(data) {
        this.modalService.setData(data);
        this.modalService.openModal('/components/members/modals/memberModalTemplate.html', 'MemberModalController', 'sm', 'lkfs-members-modal');
    }
}

export default MembersController;