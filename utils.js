export function selectById(id) {
  return document.getElementById(id); 
}

export function creatbtn(id, texto) {
  const btn = document.createElement('button');
  btn.id = id;
  btn.textContent = texto;
  return btn;
}

export function openLink(btn, url) {
  btn.addEventListener('click', () => {
    window.open(url, '_blank');
  });
  return btn;
}
