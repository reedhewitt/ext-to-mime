export default function extToMime(ext){
  switch(ext){

    ////////////////////////////////////////////////////////////////
    //  Text
    ////////////////////////////////////////////////////////////////

    case 'html':
    case 'htm':
    case 'shtml':
      return 'text/html';
    case 'css':
      return 'text/css';
    case 'txt':
      return 'text/plain';
    case 'htc':
      return 'text/x-component';
    case 'mml':
      return 'text/mathml';

    ////////////////////////////////////////////////////////////////
    //  Image
    ////////////////////////////////////////////////////////////////

    case 'gif':
      return 'image/gif';
    case 'jpeg':
    case 'jpg':
      return 'image/jpeg';
    case 'webp':
      return 'image/webp';
    case 'avif':
      return 'image/avif';
    case 'png':
      return 'image/png';
    case 'ico':
      return 'image/x-icon';
    case 'jng':
      return 'image/x-jng';
    case 'wbmp':
      return 'image/vnd.wap.wbmp';

    ////////////////////////////////////////////////////////////////
    //  Audio
    ////////////////////////////////////////////////////////////////

    case 'aac';
      return 'audio/aac';
    case 'mp3':
      return 'audio/mpeg';
    case 'ra':
      return 'audio/x-realaudio';

    ////////////////////////////////////////////////////////////////
    //  Video
    ////////////////////////////////////////////////////////////////

    case 'mpeg':
    case 'mpg':
      return 'video/mpeg';
    case 'mov':
      return 'video/quicktime';
    case 'flv':
      return 'video/x-flv';
    case 'avi':
      return 'video/x-msvideo';
    case 'wmv':
      return 'video/x-ms-wmv';
    case 'asx':
    case 'asf':
      return 'video/x-ms-asf';
    case 'mng':
      return 'video/x-mng';

    ////////////////////////////////////////////////////////////////
    //  Font
    ////////////////////////////////////////////////////////////////

    case 'woff':
      return 'font/woff';
    case 'woff2':
      return 'font/woff2';

    ////////////////////////////////////////////////////////////////
    //  Application
    ////////////////////////////////////////////////////////////////

    case 'js':
      return 'application/x-javascript';
    case 'json':
      return 'application/json';
    case 'xml':
    case 'rss':
      return 'application/xml';
    case 'jar':
    case 'war':
    case 'ear':
      return 'application/java-archive';
    case 'hqx':
      return 'application/mac-binhex40';
    case 'pdf':
      return 'application/pdf';
    case 'cco':
      return 'application/x-cocoa';
    case 'jardiff':
      return 'application/x-java-archive-diff';
    case 'jnlp':
      return 'application/x-java-jnlp-file';
    case 'run':
      return 'application/x-makeself';
    case 'pl':
    case 'pm':
      return 'application/x-perl';
    case 'prc':
    case 'pdb':
      return 'application/x-pilot';
    case 'rar':
      return 'application/x-rar-compressed';
    case 'rpm':
      return 'application/x-redhat-package-manager';
    case 'sea':
      return 'application/x-sea';
    case 'swf':
      return 'application/x-shockwave-flash';
    case 'sit':
      return 'application/x-stuffit';
    case 'tcl':
    case 'tk':
      return 'application/x-tcl';
    case 'der':
    case 'pem':
    case 'crt':
      return 'application/x-x509-ca-cert';
    case 'xpi':
      return 'application/x-xpinstall';
    case 'zip':
      return 'application/zip';
    case 'epub':
      return 'application/epub+zip';
    case 'deb':
    case 'bin':
    case 'exe':
    case 'dll':
    case 'dmg':
    case 'eot':
    case 'iso':
    case 'img':
    case 'msi':
    case 'msp':
    case 'msm':
      return 'application/octet-stream';
  }

  return 'application/octet-stream';
}
