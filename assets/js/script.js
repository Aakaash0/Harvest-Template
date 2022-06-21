/* Author:

*/
// slick slider code added

var container = document.querySelector(".container")
var page_check = document.querySelector("body > div")

if (page_check.className == "container home-page") {
  $('.banner__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  //  modal
  const images = document.querySelectorAll(".portfolio--images figure");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modalImg");
  const close = document.querySelector(".close");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      modalImg.src = image.children[0].src;
      modal.classList.add("appear");
      close.addEventListener("click", function () {
        modal.classList.remove("appear");
      });
    });
  });

  // scroll top
  var goto_top = document.querySelector(".goto_top");

  window.addEventListener('scroll', function () {
    if (window.scrollY > 550) {
      goto_top.classList.add("display");
    }
    else {
      goto_top.classList.remove("display");
    }
  });
  var primary_menu = document.querySelector("nav");

  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      primary_menu.classList.add("fixed_menu");
    }
    else {
      primary_menu.classList.remove("fixed_menu");
    }
  });

  // Load more
  var readMore = document.querySelector('.right-arrow')
  var elemExtra = document.querySelectorAll('.services--show')
  var array_tabs = Array.from(readMore);
  readMore.addEventListener('click', function (e) {
    e.preventDefault();
    var spanText = document.querySelector('.all--services span');

    elemExtra.forEach(function (item) { item.classList.toggle('show') })
    if (spanText.innerHTML === "all services") spanText.innerHTML = "less services"
    else spanText.innerHTML = 'all services';
  })

  // form validation
  var reg;
  var nameReg = /^[a-zA-Z ]{2,30}$/;
  var emailReg = /^([0-9a-zA-Z\_\.\-]+)@([0-9a-zA-Z\_\.\-]+)\.([a-zA-Z]+)$/;
  var phoneReg = /^\d{10}$/;
  var addressReg = /^[a-zA-Z0-9\-\\\_}]{5,80}$/;
  var passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{2,20}$/;
  var cPasswordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  var enquiry = document.getElementById('enquiry')
  var username = document.getElementById('fullname');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var useraddress = document.getElementById('message');
  var checkVal = document.getElementById('condition');
  var form = document.querySelector('form');

  enquiry.addEventListener('input', enquiryval)
  username.addEventListener('input', nameval);
  email.addEventListener('input', emailval);
  phone.addEventListener('input', phoneval)
  useraddress.addEventListener('input', addressval);
  checkVal.addEventListener("change", changeval)

  function enquiryval(successobj) {
    var span = document.querySelector(".enquiries");
    if (enquiry.value != false) {
      document.querySelector('.enquiries').classList.add('success');
      document.querySelector('.enquiries').innerText = "Option is correct"
      span.classList.add("show")
      successobj.userSuccess = true
      return true;
    } else {
      username.classList.add('invalid');
      document.querySelector('.enquiries').classList.remove('success');
      document.querySelector('.enquiries').innerText = "Please select one."
      span.classList.add("show")
      return false;
    }
  }

  function nameval(successobj) {
    var span = document.querySelector(".full-name");
    if (username.value.length > 2 && username.value.match(nameReg)) {
      document.querySelector('.full-name').classList.add('success');
      document.querySelector('.full-name').innerText = "Input Name is correct"
      span.classList.add("show")
      successobj.userSuccess = true
      return true;
    } else {
      username.classList.add('invalid');
      document.querySelector('.full-name').classList.remove('success');
      document.querySelector('.full-name').innerText = "Please enter Alphabets only."
      span.classList.add("show")
      return false;
    }
  }

  function emailval(successobj) {
    var span = document.querySelector(".email-id");
    if (email.value.length > 3 && email.value.match(emailReg)) {
      email.classList.remove('invalid');
      document.querySelector('.email-id').classList.add('success');
      document.querySelector('.email-id').innerText = "Email is correct"
      span.classList.add("show")
      successobj.emailSuccess = true
      return true;
    } else {
      email.classList.add('invalid');
      document.querySelector('.email-id').classList.remove('success');
      document.querySelector('.email-id').innerText = "Please enter proper Email Id."
      span.classList.add("show")
      return false;
    }
  }

  function phoneval(successobj) {
    var span = document.querySelector(".phones");
    if (phone.value.length >= 10 && phone.value.match(phoneReg)) {
      document.querySelector('.phones').classList.add('success');
      document.querySelector('.phones').innerText = "Phone No is correct"
      span.classList.add("show")
      successobj.phoneSuccess = true
      return true;
    } else {
      document.querySelector('.phones').classList.remove('success');
      document.querySelector('.phones').innerText = " Please enter Numbers only."
      span.classList.add("show")
      return false;
    }
  }

  function addressval(successobj) {
    var span = document.querySelector(".message");
    if (useraddress.value.length > 5 && useraddress.value.match(addressReg)) {
      document.querySelector('.message').classList.add('success');
      document.querySelector('.message').innerText = "Address is correct "
      span.classList.add("show")
      successobj.addressSuccess = true
      return true;
    } else {
      document.querySelector('.message').classList.remove('success');
      document.querySelector('.message').innerText = "Please enter alaphabets and number only"
      span.classList.add("show")
      return false;
    }
  }


  function changeval(successobj) {
    var span = document.querySelector(".terms");
    if (checkVal.checked == true) {
      document.querySelector('.terms').classList.add('success');
      document.querySelector('.terms').innerText = "Input Checked"
      span.classList.add("show")
      successobj.userSuccess = true
      return true;
    } else {
      username.classList.add('invalid');
      document.querySelector('.terms').classList.remove('success');
      document.querySelector('.terms').innerText = "Please click on checkbox."
      span.classList.add("show")
      return false;
    }
  }

  // gender
  document.querySelectorAll("input[type='radio']").forEach(function (radio, i) {
    radio.addEventListener('input', function (e) {
      e.preventDefault()
      genderCheck(radio)
    })
  })

  function genderCheck(radio) {
    var span = document.querySelector(".input-name");
    if (radio.value !== false) {
      document.querySelector('.input-name').classList.add('success');
      document.querySelector(".input-name").innerText = "Gender Selected"
    }
    else {
      span.classList.add("show")
    }
  }

  // Check All function
  function checkAll(successobj) {
    var checks = false;
    Object.values(successobj).every(function (val) {
      if (!val) {
        checks = false;
        return false
      }
      else {
        checks = true
      }
      return true;
    });
    if (checks) {
      alert("Thank You! Your Data Submitted");
      document.querySelectorAll('.error').forEach(function (e) { e.innerHTML = "" });
      document.querySelectorAll('.errors').forEach(function (e) { e.innerHTML = "" });
    } else {
      alert("Please add correct data")
      return null
    }
    document.querySelector('form').reset();
  }

  document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();
    var successobj = {
      userSuccess: '', emailSuccess: '', phoneSuccess: '', addressSuccess: '',
      genderSuccess: ''
    }
    enquiryval(successobj)
    nameval(successobj)
    emailval(successobj)
    phoneval(successobj)
    document.querySelectorAll("input[type='radio']").forEach(function (radio, i) {
      var span = document.querySelector(".input-name");
      if (radio.value == "") {
      } else {
        document.querySelector(".input-name").innerText = " please select gender"
        span.classList.add("show")
        successobj.genderSuccess = true
      }
    })
    addressval(successobj)
    changeval(successobj)
    checkAll(successobj)
  })
}

// Filtered tab functionality

var tabContent = document.querySelectorAll(".tab-content");
var imgGallery = document.querySelectorAll(".image-gallery");

for (var i = 0; i < tabContent.length; i++) {
  tabContent.forEach(function (tab) {
    tab.addEventListener('click', function () {
      for (var j = 0; j < tabContent.length; j++) {
        tabContent[j].classList.remove('active');
      }
      this.classList.add('active');

      var dataFilter = this.getAttribute('data-filter');

      for (var k = 0; k < imgGallery.length; k++) {
        imgGallery[k].classList.remove('active');
        imgGallery[k].classList.add('hide');
        if (imgGallery[k].getAttribute('data-img-filter') == dataFilter || dataFilter == "all") {
          imgGallery[k].classList.remove('hide');
          imgGallery[k].classList.add('active');
        }
      }
    })
  })
}

// hamburger code 
var hamburger = document.querySelector('.hamburger')
var nav = document.querySelector('nav')
var body = document.querySelector('body')

hamburger.addEventListener('click', function () {
  nav.classList.toggle('show')
  hamburger.classList.toggle('show')
  body.classList.toggle('hidden')
})

// job category code 
if (page_check.className == "container join-page") {
  let valueTab = document.querySelectorAll(".job");
  let sel = document.getElementById("job-categories");
  sel.addEventListener("change", function () {
    let v = sel.value;
    valueTab.forEach(function (elem) {
      if (elem.getAttribute("data-filter") == v.toLowerCase() || v == "All Job Category") {
        elem.classList.remove("hide");
      }
      else {
        elem.classList.add("hide");
      }
    })
  });
}
