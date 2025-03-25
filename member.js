function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'skillsMember.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}