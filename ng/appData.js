app.controller('dataCtrl', ['$scope', '$http', function($scope, $http) {
    var token = "AIzaSyBWHScRV2tmNlDYVDgbzZ9NyzPfGx-kifo"
    var blogId = "2300582624757144960"
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $scope.blogs = []
    $http.get('https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts?key=' + token).then(function(blogData) {
        var items = blogData.data.items
        for (var i = 0; items.length > i; i++) {
            var date = new Date(items[i].published);
            items[i]["MONTH"] = monthNames[date.getMonth()]
            items[i]["DAY"] = date.getDate()
            items[i]["YEAR"] = date.getFullYear()
            $scope.blogs.push(items[i])
        }
    })
    $scope.maximize = function(id) {
        $('#' + id + ' .card-content').addClass('maximize');
        $('#' + id + ' .card-action').css('display', 'none')
    }
    $scope.submit = function() {
        $http({
            url: "http://formspree.io/leigh.finan@triwellri.com",
            data: $.param({
                subject: subject.value,
                firstName: first_name.value,
                lastName: last_name.value,
                email: email.value,
                message: message.value
            }),
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(success) {
            console.log("success")
        }, function(error) {
            console.log("failure")
        });
    };
}])