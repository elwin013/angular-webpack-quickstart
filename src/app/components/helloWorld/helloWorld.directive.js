import template from './helloWorld.template.html'

export default () => {
    return {
        restrict: 'E',
        template,
        replace: true,
        scope: {
            name: '@',
        },
        link: function(scope, element) {
             scope.name = scope.name || "World";
        }
    }
}
