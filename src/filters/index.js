export function timeAgo (time) {
  let oldtime = new Date(time).getTime() / 1000
  const between = Date.now() / 1000 - oldtime
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function unescape (text) {
  let res = text || '';
  [
    ['<pre>', ''],
    ['</pre>', ''],
    ['<p>', '\n'],
    ['&amp;', '&'],
    ['&amp;', '&'],
    ['&apos;', '\''],
    ['&#x27;', '\''],
    ['&#x2F;', '/'],
    ['&#39;', '\''],
    ['&#47;', '/'],
    ['&lt;', '<'],
    ['&gt;', '>'],
    ['&nbsp;', ' '],
    ['&quot;', '"']
  ].forEach(pair => {
    res = res.replace(new RegExp(pair[0], 'ig'), pair[1])
  })

  return res
}
