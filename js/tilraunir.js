// console.log(ScrollReveal())

// ScrollReveal().setClass(".vidburdir", 'active')

// console.log(ScrollReveal())

// // create a standard scene and add it to a controller
// var scene = new ScrollMagic.Scene({
//     duration: 100,
//     offset: 200,
//     triggerHook: "onEnter",
//     reverse: false
// });

// scene.setClassToggle("#vidburdir", "active");



var controller = new ScrollMagic.Controller();

var vidburdirScene = new ScrollMagic.Scene({
    triggerElement: '.vidburdir',
    triggerHook: .6
  })
  .setClassToggle('.vidburdir', 'active')
  .reverse(false)
  .addTo(controller);

// var vidburdirScene = new ScrollMagic.Scene({
//   triggerElement: '.vidburdur-mynd',
//   triggerHook: .5
// })
// .setClassToggle('.vidburdur-mynd', 'active')
// .reverse(false)
// .addTo(controller);

// var vidburdirScene = new ScrollMagic.Scene({
//     triggerElement: '.vidburdur-info',
//     triggerHook: .6
//   })
//   .setClassToggle('.vidburdur-info', 'active')
//   .reverse(false)
//   .addTo(controller);



// $(document).ready(function(){
// 	$('#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });