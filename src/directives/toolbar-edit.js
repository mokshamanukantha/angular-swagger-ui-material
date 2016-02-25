'use strict';

angular.module('toolbarEdit', [])
    .directive('toolbarEdit', function ($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'directives/toolbar-edit.html',
            scope: {
                ngModel: '=',
                displayTitle: '='
            },
            link: function (scope, element) {
                var t;
                scope.open = false;
                scope.focus = function () {
                    $timeout.cancel(t);

                    $timeout(function () {
                        element.children()[1].focus();
                    }, 200);
                };
                scope.blur = function () {
                    t = $timeout(function () {
                        scope.open = false;
                    }, 200);
                };
                scope.toggle = function () {
                    scope.open = !scope.open;
                    scope.focus();
                };
            }
        };
    });