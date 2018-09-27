function Logger(id) {
  this.el = document.getElementById('log');
}
Logger.prototype.log = function(msg) {
  var fragment = document.createDocumentFragment();
  fragment.appendChild(document.createTextNode(msg));
  fragment.appendChild(document.createElement('br'));
  this.el.appendChild(fragment);
};

Logger.prototype.clear = function() {
  this.el.textContent = '';
};

var logger = new Logger('log');



function onStyle(elem) {
  elem.style.background = 'green';
}
function offStyle(elem) {
  elem.style.background = 'red';
}
function updateConnectionStatus(msg, connected) {
  var el = document.querySelector('#connection');

  if (connected) {
    if (el.classList) {
      el.classList.add('connected');
      el.classList.remove('disconnected');


    } else {
      el.addClass('connected');
      el.removeClass('disconnected');
    }
  } else {
    if (el.classList) {
      el.classList.remove('connected');
      el.classList.add('disconnected');
    } else {
      el.removeClass('connected');
      el.addClass('disconnected');
    }
  }
  el.innerHTML = msg + '<code></code>';
}

window.addEventListener('load', function(e) {
  if (navigator.onLine) {
    updateConnectionStatus('Status:Online', true);

	

  } else {
    updateConnectionStatus('Status:Offline', false);
  }
}, false);

window.addEventListener('Status:online', function(e) {
  logger.log("We are ready :)");

  updateConnectionStatus('Online', true);
  // Get updates from server.
}, false);

window.addEventListener('Status:offline', function(e) {
  logger.log("Connection is bad.");
  updateConnectionStatus('Status:Offline', false);

  // Use offine mode.
}, false);