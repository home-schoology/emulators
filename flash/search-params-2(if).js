if (paramName.match(/\[(\d+)?\]$/)) {
  var key = paramName.replace(/\[(\d+)?\]/, '');
  if (!obj[key]) obj[key] = [];

  if (paramName.match(/\[\d+\]$/)) {
    var index = /\[(\d+)\]/.exec(paramName)[1];
    obj[key][index] = paramValue;
  } else {
    obj[key].push(paramValue);
  }
} else {
  if (!obj[paramName]) {
    obj[paramName] = paramValue;
  } else if (obj[paramName] && typeof obj[paramName] === 'string'){
    obj[paramName] = [obj[paramName]];
    obj[paramName].push(paramValue);
  } else {
    obj[paramName].push(paramValue);
  }
}

// assume a url parameter of test=a%20space

// var original = getAllUrlParams().test; output will be 'a%20space'
// var decoded = decodeURIComponent(original); output will be 'a space'
