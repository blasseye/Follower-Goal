// Events will be sent when someone followers
// Please use event listeners to run functions.
function updateStrokeDasharray(current, target) {
  var path = document.getElementById("pathcircle");
  var percentage = (current / target) * 100;
  var pathLength = path.getTotalLength();
  var dashLength = (percentage / 100) * pathLength;
  path.setAttribute("stroke-dasharray", dashLength + ", " + (pathLength - dashLength));
}

function percentage(x, total) {
  var percentage = (x / total) * 100;
  return percentage
}

document.addEventListener('goalLoad', function (obj) {
  // obj.detail will contain information about the current goal
  // this will fire only once when the widget loads
  console.log(obj.detail);
  $('#title').html(obj.detail.title);
  $('#goal-current').text(percentage(obj.detail.amount.current, obj.detail.amount.target) + "%");
  updateStrokeDasharray(obj.detail.amount.current, obj.detail.amount.target);
});

document.addEventListener('goalEvent', function (obj) {
  // obj.detail will contain information about the goal
  console.log(obj.detail);
  $('#goal-current').text(percentage(obj.detail.amount.current, obj.detail.amount.target) + "%");
  updateStrokeDasharray(obj.detail.amount.current, obj.detail.amount.target);
});