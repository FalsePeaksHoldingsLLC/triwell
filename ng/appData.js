app.controller('dataCtrl', ['$scope','$http', function($scope, $http) {
    var token = ""
    var blogId = ""
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $http.get('https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts?key=' + token).then(function(blogData){
            var date = new Date("2018-02-04T11:22:00-08:00");
            var items = blogData.data.items
            $scope.blogs = []
            for(var i = 0; items.length > i; i ++){
                items[i]["MONTH"] = monthNames[date.getMonth()]
                items[i]["DAY"] = date.getDate()
                items[i]["YEAR"] = date.getFullYear()
                $scope.blogs.push(items[i])
            }
            $scope.maximize = function(id) {
                $('#' + id + ' .card-content' ).addClass('maximize');
            }
        });
    }]
)