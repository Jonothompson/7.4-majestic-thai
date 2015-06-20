$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'YbXtng1zE0500EiDgJ3y88KpetNQOc8FA3JUy9et';
    options.headers['X-Parse-REST-API-Key'] = 'WBr2Gj7NfkBWUIMN6foCqf11PB9fC9w2I1CBEXiK';
  }
});