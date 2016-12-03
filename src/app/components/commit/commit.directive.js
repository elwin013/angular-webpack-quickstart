import template from './commit.template.html'
import './commit.template.css'

export default () => {
    return {
        restrict: 'E',
        template,
        replace: true,
        scope: {
            avatar: '=',
            date: '=',
            message: '='
        }
    }
}
