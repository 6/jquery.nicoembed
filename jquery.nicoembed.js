$.fn.extend({
  nicoembed: function(videoId) {
    /*
    thumb_watch script does not execute when downloaded asynchronously, so use
    an iframe to load it on the fly.
    */
    var iframeContent =
      '<script>window.self = window.parent;</script> \
      <script src="http://ext.nicovideo.jp/thumb_watch/'+ videoId +'"></script> \
      <style>*{margin:0;padding:0;width:100%;height:100%}</style>';

    // Note: protocols, do not match, resulting in "Unsafe JavaScript attempt to access frame" error
    var iframe =
    '<iframe class="nicovideo-iframe" \
      style="border:0;width:100%;height:100%" \
      src="data:text/html;charset=utf-8,'+ escape(iframeContent) +'"> \
    </iframe>'

    this.html(iframe);
  }
});
