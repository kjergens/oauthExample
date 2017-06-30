function onSignIn(googleUser){
    toggleHidden();
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile


}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();

  var name = profile.getName()
  var imgURL = profile.getImageUrl()
  var email = profile.getEmail()

  $(".userName").text(name)
  $("img").attr("src", imgURL)
  $(".email").text(email)
  
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function toggleHidden(){
    $(".mainContainer").toggleClass("hidden");
    $(".g-signin2").toggleClass("hidden");
    $(".signOut").toggleClass("hidden");
}

// 197337806560-c82o8eqhri4iblqpo7qc7g89hsfr607m.apps.googleusercontent.com

// b-vWn0D34jU1dBhzdhKzNMoq

// <script src="https://apis.google.com/js/platform.js" async defer></script>

// <meta name="google-signin-client_id" content="197337806560-c82o8eqhri4iblqpo7qc7g89hsfr607m.apps.googleusercontent.com">

