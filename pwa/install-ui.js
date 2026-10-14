(() => {
  if (matchMedia('(display-mode: standalone)').matches || navigator.standalone) return;
  const style=document.createElement('style');
  style.textContent='#fc-install{position:fixed;right:8px;bottom:calc(env(safe-area-inset-bottom,0px) + 8px);z-index:9999;padding:9px 12px;border:1px solid #668298;border-radius:8px;background:#232c39;color:white;font:12px system-ui;box-shadow:0 2px 9px #0009}#fc-help{position:fixed;right:8px;bottom:54px;max-width:270px;padding:12px;background:#232c39;color:white;border:1px solid #668298;border-radius:8px;z-index:9999;font:13px/1.45 system-ui}#fc-help[hidden]{display:none}';
  document.head.append(style);
  const button=document.createElement('button');button.id='fc-install';button.textContent='Install FigCraft';button.type='button';
  const help=document.createElement('div');help.id='fc-help';help.hidden=true;help.setAttribute('role','status');
  help.textContent=/iPad|iPhone|iPod/.test(navigator.userAgent)?'Open Safari Share → Add to Home Screen.':'Open your browser menu → Install app or Add to Home screen.';
  document.body.append(button,help);
  let pending=null;
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();pending=event;});
  button.addEventListener('click',()=>{if(pending){const event=pending;pending=null;event.prompt();}else help.hidden=!help.hidden;});
  window.addEventListener('appinstalled',()=>{button.remove();help.remove();});
})();
