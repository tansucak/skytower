import os
import re

def add_about_button_to_index():
    base_dir = r'c:\Users\tansu\Desktop\websitesiskytower'
    langs = ['tr', 'en', 'ru', 'ka']
    
    for lang in langs:
        file_path = os.path.join(base_dir, lang, 'index.html')
        if not os.path.exists(file_path):
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find the hero-btns div and add the button
            # <div class="hero-btns">
            #     <a href="rooms.html" class="btn btn-gold" data-i18n="nav_rooms">Odalar</a>
            # </div>
            
            button_html = '<a href="contact.html#about" class="btn btn-outline" data-i18n="btn_about">Hakkımızda</a>'
            
            # Correcting for language specific fallback text
            fallbacks = {
                'tr': 'Hakkımızda',
                'en': 'About Us',
                'ru': 'О нас',
                'ka': 'ჩვენს შესახებ'
            }
            
            lang_button_html = f'<a href="contact.html#about" class="btn btn-outline" data-i18n="btn_about">{fallbacks[lang]}</a>'
            
            # regex to find the Odalar button and append the new one
            pattern = re.compile(r'(<a href="rooms\.html"[^>]*>.*?</a>)')
            
            if 'btn_about' not in content:
                content = pattern.sub(r'\1\n                    ' + lang_button_html, content)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Added About button to: {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    add_about_button_to_index()
