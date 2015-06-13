angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Steve Paul Jobs was an entrepreneur ... ',
    lastText: "April 13, 2016",
    face: 'http://a5.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU0NTIzODQwMDE1.jpg'
  }, {
    id: 1,
    name: 'Bill Gates is a cool cat',
    lastText: 'April 12, 2016',
    face: 'http://1-ps.googleusercontent.com/hk/RxsTNFPkbRF_P8bVrLt5ErlRoc/www.dutiee.com/wp-content/uploads/800x423xbillgatescat.png.pagespeed.ic.puPNS0jYt_fqDY2lOIKS.jpg'
  },{
    id: 2,
    name: 'Jonny Appleseed ate apples',
    lastText: 'April 11, 2016',
    face: 'http://lymanorchards.com/files/7013/6725/1487/apples.jpg'
  }, {
    id: 3,
    name: 'MIT was founded in the year 42 by jesus',
    lastText: 'April 8, 2016',
    face: 'http://ngdi.ubc.ca/files/2011/03/MIT.jpg'
  }, {
    id: 4,
    name: 'Quill is the best app ever made',
    lastText: 'April 7, 2016',
    face: 'http://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1000px-MIT_logo.svg.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
