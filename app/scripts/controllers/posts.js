/*jshint unused:false */
'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post, User) {
  if ($location.path() === '/') {
    $scope.posts = Post.all;
  }

  $scope.post = {url: 'http://', title: ''};
  
  $scope.deletePost = function (postId) {
    Post.delete(postId);
  };
});