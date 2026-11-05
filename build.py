"""Збірка тренажера: src/* → index.html (PWA для GitHub Pages) і dist/ct-genai-trainer.html (один файл без PWA).
Запуск: python3 build.py"""
import os
R = os.path.dirname(os.path.abspath(__file__))
S = os.path.join(R, 'src')
rd = lambda f: open(os.path.join(S, f), encoding='utf-8').read()
CHAPTER_FILES = sorted(f for f in os.listdir(S) if f.startswith('ch') and f.endswith('.js'))  # ch1_a.js, ch1_b.js, … ch2_*.js
data = '\n'.join(rd(f) for f in CHAPTER_FILES)
base = rd('shell.html').replace('/*__ENGINE__*/', rd('engine.js')).replace('/*__DATA__*/', data).replace('/*__APP__*/', rd('app.js'))
head = '''<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#7c5cff">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="GenAI Training">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="icon" type="image/png" href="icon-192.png">
<style>header.top{padding-top:env(safe-area-inset-top)}main,footer.foot,.top-in,nav.tabs{padding-left:max(16px,env(safe-area-inset-left));padding-right:max(16px,env(safe-area-inset-right))}.toast-box{bottom:calc(18px + env(safe-area-inset-bottom))}footer.foot{padding-bottom:calc(30px + env(safe-area-inset-bottom))}</style>
<script src="config.js"></script>'''
body = '''<script>if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost')){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});}</script>'''
pwa = base.replace('<!--__PWA_HEAD__-->', head).replace('<!--__PWA_BODY__-->', body).replace('width=device-width, initial-scale=1"', 'width=device-width, initial-scale=1, viewport-fit=cover"')
open(os.path.join(R, 'index.html'), 'w', encoding='utf-8').write(pwa)
os.makedirs(os.path.join(R, 'dist'), exist_ok=True)
open(os.path.join(R, 'dist', 'ct-genai-trainer.html'), 'w', encoding='utf-8').write(base.replace('<!--__PWA_HEAD__-->', '').replace('<!--__PWA_BODY__-->', ''))
print('built', CHAPTER_FILES)
