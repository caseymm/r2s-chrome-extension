var username = 'cmillz';

getVideoList(window.location.href);

  function checkUser(cur_url){
    if(cur_url === 'http://caseymm.github.io/reverse-second-screen/'){
      console.log('url')
      $('#nameButton').on('click', function(){
        // clears too fast
        // username = $('#nameInput').val();
        // needs a way to save the username
        username = "username";
      })
    }

  }

  function getVideoList(feature){
    if(feature === "http://caseymm.github.io/reverse-second-screen/space.html#"+username){
      feature = 'space';
    } else if(feature === "http://caseymm.github.io/reverse-second-screen/burning_man.html#"+username){
      feature = 'burning_man';
    } else if(feature === "https://sweltering-torch-4591.firebaseio.com/users/"+username){
      feature = 'cherry_blossoms';
    }
    var videos = new Firebase('https://sweltering-torch-4591.firebaseIO.com/features/'+feature);

      videos.once('value', function (snapshot) {
        var vids = snapshot.val();
        console.log(vids)
        // if(vids[feature]){
          var last_loaded = new Firebase('https://sweltering-torch-4591.firebaseIO.com/users/'+username+'/last_loaded');
          last_loaded.set(feature);

          // Would be great if this opened up a new tab as well that could be cast

          //These keys have to match ids (or maybe classes) in the article page
          var slug_list = Object.keys(vids[feature]);
          addListeners(slug_list);
        // }
      });
  }

  function addListeners(slug_list){
    $.each(slug_list, function(i, d){
      console.log(d);
      // $('#'+d).on('mouseover', function(){
      //   // trigger video change
      // })
    })
  }
